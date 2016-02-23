jQuery(document).ready(function(){
  new NewtonJobs(
    {
      courses : [   //an array of categories
        {
          'label':'Informatic department',  //name of category that will be shown
          'searchBy':'developer',           //query to be used to show results for this category
          'icon':'img/computer.png'         //image ta will be shown on the left side of each line
        },
        {
          'label':'Network department',
          'searchBy':'network',
          'icon':'img/network.png'
        }
      ],
      selector : '#newton-search',        //element selector where the widget will be attached
      separator : ' hiring ',             //result separator (ex.: Newton.ai hiring Web Developer)
      city:'',                            //limit the search to a specific city
      country:'us'                        //limit the search to a specific country
    }
  );
});