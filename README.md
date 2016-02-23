# Newton_Widget

This widget allows you to implement the Newton Job Search in your website.

# Demo
[Click here for a live demo](https://newton.ai/demo)
# Installation
Include the css and js file in your page. Note that jQuery is required

```html
<link href="css/search-newton-1.0.1.css" rel="stylesheet">
```

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
```
```html
<script src="js/search-newton-1.0.1.js"></script>
```

There's also a .zip file to use this plugin in Wordpress

# Usage
```javascript
new NewtonJobs();
```

## Options
All the options below have the default values
```javascript
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
```

# Developer
Developed by [Pedro 'ColdFox' Branco](https://github.com/C0ldF0x/)
