(function ($) {

    $.fn.goToCookies = function (mode) {

        var texts = {
            values: []
        };
        var cookieName = $(this).prop('id') + "Values";
        
        if (Cookies.get(cookieName) != undefined) {
//            console.log('hathoda');
//            console.log(Cookies.get(cookieName));
            texts = JSON.parse(Cookies.get(cookieName));
//            console.log(texts);
        }
        if (mode== 'push') {
            texts.values.push($(this).val());
            Cookies.set(cookieName, texts, 365);
        }
        
//        console.log ('autocomplete values in cookies:');
//        console.log (texts.values);
        
        $(this).autocomplete({
            source: texts.values
        });
        
        
        
        return this;
    };

}(jQuery));

