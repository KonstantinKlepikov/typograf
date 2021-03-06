Typograf.addRule({
    name: 'ru/dash/decade',
    handler: function(text, settings) {
        var re = new RegExp('(^|\\s)(\\d{3}|\\d)0' +
                '(' + Typograf.getData('common/dash') + ')' +
                '(\\d{3}|\\d)0(-е[ \u00A0])' +
                '(?=г\\.?[ \u00A0]?г|год)', 'g');

        return text.replace(re, '$1$20' + settings.dash + '$40$5');
    },
    settings: {
        dash: '\u2013' // &ndash;
    }
});
