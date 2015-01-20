PHPtoJS_API
===========

Boilerplate for setting up a simple API using AJAX and a PHP backend.

###Setup and Usage

 + Follow the example of [Backend.php](https://github.com/likethemammal/php-to-js_api/blob/master/backend.php) to write backend logic for each api calls. These will be **private**.
 + [API.php](https://github.com/likethemammal/php-to-js_api/blob/master/api.php) creates an api of functions for each method in [API.js](https://github.com/likethemammal/php-to-js_api/blob/master/js/api.js), passing over the parameters and converting them to the right variable types. List out the same functions found in API.js in the `API` class. 
API.js is a list of all the api calls and the parameters they take, and converts them to ajax calls.
 + [Index.html](https://github.com/likethemammal/php-to-js_api/blob/master/index.html) has an example in JS of how an API Request will look. 

This setup allows each component of the api to catch errors that are specific and at the same time forward them to the front end to be easily readable.


####todos:

* Remove dependency on jQuery
* Live demo
