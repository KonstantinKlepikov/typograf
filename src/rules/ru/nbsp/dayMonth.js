Typograf.addRule({
    name: 'ru/nbsp/dayMonth',
    handler: function(text) {
        var re = new RegExp('(\\d{1,2}) (' + Typograf.getData('ru/shortMonth') + ')', 'gi');
        return text.replace(re, '$1\u00A0$2');
    }
});
