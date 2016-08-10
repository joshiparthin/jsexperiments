# Cookie Based jQuery Autocomplete on Text Box.
This is a basic jquery plugin I made to enable jQuery autocomplete suggestions by storing past values in cookies

## Dependencies:
1. jQuery
2. jQuery UI
3. [jQuery Cookie Plugin ](https://plugins.jquery.com/cookie/)

## Download 
Download the plugin file from here: [jq.cookie.autocomplete.js](https://github.com/joshiparthin/jsexperiments/blob/master/jq-cookie-autocomplete/public/javascripts/jq.cookie.autocomplete.js)
## Getting Started
In your html code you can include dependent scripts/css like following:

```
   <head>
      ...
        <script   src="https://code.jquery.com/jquery-3.1.0.min.js"   integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="   crossorigin="anonymous"></script>
        <script src = "javascripts/js.cookie.js" type="text/javascript"></script>
        <script src ="javascripts/jq.cookie.autocomplete.js" type="text/javascript"></script>
        <script   src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"   integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="   crossorigin="anonymous"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">
        ...
```
## Initialize and attach text box to a cookie
You need to initialize the plugin to attach text box to a cookie. Plugin required text box to have an ID and needs it for binding with a cookie.
```
$("#your-textbox-id").goToCookies();
```

## Push Event for pushing the values of text box to cookies
You need to call the push event to make the text box push the values in it to a cookie so that it can be referred in auto complete next time. 
```
$("#email-box").goToCookies('push');
```

The above can be called at events like blur or text box or click of submit button, etc. 

## Sample Usage:
Here is a sample code for its usage.
```
            jQuery(document).ready(function () {
                $("#email-box").goToCookies();

                $("#submitButton").on('click',function () {
                    $("#email-box").goToCookies('push');
                });
            });
```
# Notice
this plugin is still in alpha stage and not tested compatible with all cases. There is no warrenty for this code and use it at your own risk. 

# TODO:
- [ ] passing options of jquery cookie plugin
- [ ] passing options of jquery ui autocomplete components. Right  now only basic options of autocomplete component are called. 
