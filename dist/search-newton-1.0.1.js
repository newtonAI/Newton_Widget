/*! NewtonSearch - v1.0.0 - 2016-02-01
* Copyright (c) 2016 Newton.ai; Licensed MIT */
if (typeof jQuery == 'undefined') {  
    throw "(!) jQuery is required";
}else{
	(function() {

	  // Define our constructor
	  this.NewtonJobs = function() {

	    // Define option defaults
	    var defaults = {
	      courses : [
	      		{
	      			'label':'Informatic department',
	      			'searchBy':'developer',
	      			'icon':'img/computer.png'
	      		},
	      		{
	      			'label':'Network department',
	      			'searchBy':'network',
	      			'icon':'img/network.png'
	      		}
	      	],
	      selector : '#newton-search',
	      separator : ' hiring ',
	      city:'',
	      country:'us'
	    }

	    if (arguments[0] && typeof arguments[0] === "object") {
	      this.options = extendDefaults(defaults, arguments[0]);
	    }else{
	    	this.options = defaults;
	    }

	    init(this.options);

	  }

	  // Utility method to extend defaults with user options
	  function extendDefaults(source, properties) {
	    var property;
	    for (property in properties) {
	      if (properties.hasOwnProperty(property)) {
	        source[property] = properties[property];
	      }
	    }
	    return source;
	  }

	  function init(options){
	  	var courses = options.courses;
	  	var selector = options.selector;
	  	var element = jQuery(selector);
	  	if(!element.length){
	  		throw "(!) Element("+selector+") not found";
	  		return;
	  	}
	  	element.addClass('newton-search-holder');

	  	var jobListingNewton = jQuery('<div></div>');
	  	jobListingNewton.attr('id','jobListingNewton');

	  	var categoryListingNewton = jQuery('<ul></ul>');
		categoryListingNewton.attr('id','categoryListingNewton');	  	

		for (var i = 0; i < courses.length; i++) {
			var singleCourse = courses[i];
			var courseName = singleCourse.label;
			var query = singleCourse.searchBy;
			var icon = singleCourse.icon;
			icon = jQuery('<img>').attr('src',icon);

			var courseElement = jQuery('<li></li>');

			var iconHolder = jQuery('<div class="newton-image-holder"></div>');
			iconHolder.append(icon);
			courseElement.append(iconHolder);
			courseElement.attr('title',courseName);
			courseElement.html(courseElement.html()+courseName);			
			courseElement.attr('data-query',query);
			categoryListingNewton.append(courseElement);
		};

		jobListingNewton.append(categoryListingNewton);

		var jobByCatListingNewton = jQuery('<ul></ul>');
		jobByCatListingNewton.attr('id','jobByCatListingNewton');
		jobByCatListingNewton.addClass('inactive');

		jobByCatListingNewton.append('<li>demo</li>');
		jobListingNewton.append(jobByCatListingNewton);

	  	element.append(jobListingNewton);

	  	/*!!!AMAZING SOLUTION RIGHT HERE!!!*/
	  	element.children('a').first().attr('href','#');

	  	jQuery('#jobByCatListingNewton').height(jQuery('#jobListingNewton').height());

	  	jQuery(element).click(function(e){
	  		jQuery(this).addClass('active');
	  		e.stopPropagation();
	  	});


	  	jQuery(document).click(function(){
	  		jQuery(element).removeClass('active');
	  	});

	  	jQuery('#categoryListingNewton>li').click(function(){
	  	     if(jQuery(this).hasClass('active')){
	  	        jQuery('#categoryListingNewton').removeClass('inactive');     
	  	        jQuery('#jobByCatListingNewton').addClass('inactive');     
	  	        jQuery('#categoryListingNewton>li').removeClass('active');   
	  	     }else{
	  	        jQuery('#categoryListingNewton>li').removeClass('active');
	  	        jQuery(this).addClass('active');
	  	        jQuery('#categoryListingNewton').addClass('inactive');
	  	       	jQuery('#jobByCatListingNewton').removeClass('inactive');     

	  	       	if(typeof newtonSearchRequest !== 'undefined' && newtonSearchRequest != null){
	  	       		newtonSearchRequest.abort();
	  	       		newtonSearchRequest = null;
	  	       	}

	  	       	var query = jQuery(this).data('query');
	  	       	var country_code = options.country;
	  	       	var city = options.city;
	  	       	var page = 1;

	  	       	var params = {
	  	       		query:query,
	  	       		country_code:country_code,
	  	       		city:city,
	  	       		page:page,
	  	       		key:'AE'
	  	       	};
	  	       	params = jQuery.param(params);

	  	       	jQuery('#jobByCatListingNewton').empty();
	  	       	jQuery('#jobByCatListingNewton').append('<div class="newton-search-loading-spinner"></div>');

	  	       	newtonSearchRequest = jQuery.post("https://newton.ai/newton/getJob?"+params,function(data){
	  	       		data = JSON.parse(data);
	  	       		jQuery('#jobByCatListingNewton').empty();
	  	       		if(data.results.length){
	  	       			for (var i = 0; i < data.results.length; i++) {
	  	       				var result = data.results[i];
	  	       				var company = result.company;
	  	       				var title = result.title;
	  	       				var link = result.link;

	  	       				if(company.length && company != 'Company not disclosed'){
	  	       					var toShow = company + options.separator + title;
	  	       				}else{
	  	       					var toShow = title;
	  	       				}

	  	       				var offer = jQuery('<li></li>');
	  	       				var anchor = jQuery('<a></a>');
	  	       				anchor.attr('href',link);
	  	       				anchor.attr('target','_blank');
	  	       				anchor.html(toShow);
	  	       				anchor.attr('title',toShow);
	  	       				offer.append(anchor);
	  	       				jQuery('#jobByCatListingNewton').append(offer);

	  	       			};
	  	       		}else{
	  	       			console.err('No results found');
	  	       		}
	  	       	});

	  	     }
	  	  });

	  }

	}());
}

