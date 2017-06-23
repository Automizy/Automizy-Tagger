(function(){
    function hasFont(className, fontFamily) {
        var span = document.createElement('span');
        span.className = className;
        span.style.display = 'none';
        document.body.insertBefore(span, document.body.firstChild);
        if (window.getComputedStyle(span, null).getPropertyValue('font-family') === fontFamily) {
            document.body.removeChild(span);
            return true;
        }
        document.body.removeChild(span);
        return false;
    }

    window.AutomizyTagger = window.$AT = new AutomizyProject({
        variables: {
            //key:value
        },
        plugins: [
            {
                name: 'fontawesome',
                skipCondition: hasFont('fa', 'FontAwesome'),
                css: "vendor/fontawesome/css/font-awesome.min.css"
            },
            {
                name: 'jquery-ui',
                skipCondition: function(){return typeof jQuery.ui !== 'undefined'},
                js: "vendor/jquery-ui/jquery-ui.js",
                css:[
                    "vendor/jquery-ui/themes/base/jquery-ui.css"
                ]
            }
        ]
    });
})();

(function(){
    $AT.accentMap = {
        'ẚ': 'a',
        'Á': 'a',
        'á': 'a',
        'À': 'a',
        'à': 'a',
        'Ă': 'a',
        'ă': 'a',
        'Ắ': 'a',
        'ắ': 'a',
        'Ằ': 'a',
        'ằ': 'a',
        'Ẵ': 'a',
        'ẵ': 'a',
        'Ẳ': 'a',
        'ẳ': 'a',
        'Â': 'a',
        'â': 'a',
        'Ấ': 'a',
        'ấ': 'a',
        'Ầ': 'a',
        'ầ': 'a',
        'Ẫ': 'a',
        'ẫ': 'a',
        'Ẩ': 'a',
        'ẩ': 'a',
        'Ǎ': 'a',
        'ǎ': 'a',
        'Å': 'a',
        'å': 'a',
        'Ǻ': 'a',
        'ǻ': 'a',
        'Ä': 'a',
        'ä': 'a',
        'Ǟ': 'a',
        'ǟ': 'a',
        'Ã': 'a',
        'ã': 'a',
        'Ȧ': 'a',
        'ȧ': 'a',
        'Ǡ': 'a',
        'ǡ': 'a',
        'Ą': 'a',
        'ą': 'a',
        'Ā': 'a',
        'ā': 'a',
        'Ả': 'a',
        'ả': 'a',
        'Ȁ': 'a',
        'ȁ': 'a',
        'Ȃ': 'a',
        'ȃ': 'a',
        'Ạ': 'a',
        'ạ': 'a',
        'Ặ': 'a',
        'ặ': 'a',
        'Ậ': 'a',
        'ậ': 'a',
        'Ḁ': 'a',
        'ḁ': 'a',
        'Ⱥ': 'a',
        'ⱥ': 'a',
        'Ǽ': 'a',
        'ǽ': 'a',
        'Ǣ': 'a',
        'ǣ': 'a',
        'Ḃ': 'b',
        'ḃ': 'b',
        'Ḅ': 'b',
        'ḅ': 'b',
        'Ḇ': 'b',
        'ḇ': 'b',
        'Ƀ': 'b',
        'ƀ': 'b',
        'ᵬ': 'b',
        'Ɓ': 'b',
        'ɓ': 'b',
        'Ƃ': 'b',
        'ƃ': 'b',
        'Ć': 'c',
        'ć': 'c',
        'Ĉ': 'c',
        'ĉ': 'c',
        'Č': 'c',
        'č': 'c',
        'Ċ': 'c',
        'ċ': 'c',
        'Ç': 'c',
        'ç': 'c',
        'Ḉ': 'c',
        'ḉ': 'c',
        'Ȼ': 'c',
        'ȼ': 'c',
        'Ƈ': 'c',
        'ƈ': 'c',
        'ɕ': 'c',
        'Ď': 'd',
        'ď': 'd',
        'Ḋ': 'd',
        'ḋ': 'd',
        'Ḑ': 'd',
        'ḑ': 'd',
        'Ḍ': 'd',
        'ḍ': 'd',
        'Ḓ': 'd',
        'ḓ': 'd',
        'Ḏ': 'd',
        'ḏ': 'd',
        'Đ': 'd',
        'đ': 'd',
        'ᵭ': 'd',
        'Ɖ': 'd',
        'ɖ': 'd',
        'Ɗ': 'd',
        'ɗ': 'd',
        'Ƌ': 'd',
        'ƌ': 'd',
        'ȡ': 'd',
        'ð': 'd',
        'É': 'e',
        'Ə': 'e',
        'Ǝ': 'e',
        'ǝ': 'e',
        'é': 'e',
        'È': 'e',
        'è': 'e',
        'Ĕ': 'e',
        'ĕ': 'e',
        'Ê': 'e',
        'ê': 'e',
        'Ế': 'e',
        'ế': 'e',
        'Ề': 'e',
        'ề': 'e',
        'Ễ': 'e',
        'ễ': 'e',
        'Ể': 'e',
        'ể': 'e',
        'Ě': 'e',
        'ě': 'e',
        'Ë': 'e',
        'ë': 'e',
        'Ẽ': 'e',
        'ẽ': 'e',
        'Ė': 'e',
        'ė': 'e',
        'Ȩ': 'e',
        'ȩ': 'e',
        'Ḝ': 'e',
        'ḝ': 'e',
        'Ę': 'e',
        'ę': 'e',
        'Ē': 'e',
        'ē': 'e',
        'Ḗ': 'e',
        'ḗ': 'e',
        'Ḕ': 'e',
        'ḕ': 'e',
        'Ẻ': 'e',
        'ẻ': 'e',
        'Ȅ': 'e',
        'ȅ': 'e',
        'Ȇ': 'e',
        'ȇ': 'e',
        'Ẹ': 'e',
        'ẹ': 'e',
        'Ệ': 'e',
        'ệ': 'e',
        'Ḙ': 'e',
        'ḙ': 'e',
        'Ḛ': 'e',
        'ḛ': 'e',
        'Ɇ': 'e',
        'ɇ': 'e',
        'ɚ': 'e',
        'ɝ': 'e',
        'Ḟ': 'f',
        'ḟ': 'f',
        'ᵮ': 'f',
        'Ƒ': 'f',
        'ƒ': 'f',
        'Ǵ': 'g',
        'ǵ': 'g',
        'Ğ': 'g',
        'ğ': 'g',
        'Ĝ': 'g',
        'ĝ': 'g',
        'Ǧ': 'g',
        'ǧ': 'g',
        'Ġ': 'g',
        'ġ': 'g',
        'Ģ': 'g',
        'ģ': 'g',
        'Ḡ': 'g',
        'ḡ': 'g',
        'Ǥ': 'g',
        'ǥ': 'g',
        'Ɠ': 'g',
        'ɠ': 'g',
        'Ĥ': 'h',
        'ĥ': 'h',
        'Ȟ': 'h',
        'ȟ': 'h',
        'Ḧ': 'h',
        'ḧ': 'h',
        'Ḣ': 'h',
        'ḣ': 'h',
        'Ḩ': 'h',
        'ḩ': 'h',
        'Ḥ': 'h',
        'ḥ': 'h',
        'Ḫ': 'h',
        'ḫ': 'h',
        'H': 'h',
        '̱': 'h',
        'ẖ': 'h',
        'Ħ': 'h',
        'ħ': 'h',
        'Ⱨ': 'h',
        'ⱨ': 'h',
        'Í': 'i',
        'í': 'i',
        'Ì': 'i',
        'ì': 'i',
        'Ĭ': 'i',
        'ĭ': 'i',
        'Î': 'i',
        'î': 'i',
        'Ǐ': 'i',
        'ǐ': 'i',
        'Ï': 'i',
        'ï': 'i',
        'Ḯ': 'i',
        'ḯ': 'i',
        'Ĩ': 'i',
        'ĩ': 'i',
        'İ': 'i',
        'i': 'i',
        'Į': 'i',
        'į': 'i',
        'Ī': 'i',
        'ī': 'i',
        'Ỉ': 'i',
        'ỉ': 'i',
        'Ȉ': 'i',
        'ȉ': 'i',
        'Ȋ': 'i',
        'ȋ': 'i',
        'Ị': 'i',
        'ị': 'i',
        'Ḭ': 'i',
        'ḭ': 'i',
        'I': 'i',
        'ı': 'i',
        'Ɨ': 'i',
        'ɨ': 'i',
        'Ĵ': 'j',
        'ĵ': 'j',
        'J': 'j',
        '̌': 'j',
        'ǰ': 'j',
        'ȷ': 'j',
        'Ɉ': 'j',
        'ɉ': 'j',
        'ʝ': 'j',
        'ɟ': 'j',
        'ʄ': 'j',
        'Ḱ': 'k',
        'ḱ': 'k',
        'Ǩ': 'k',
        'ǩ': 'k',
        'Ķ': 'k',
        'ķ': 'k',
        'Ḳ': 'k',
        'ḳ': 'k',
        'Ḵ': 'k',
        'ḵ': 'k',
        'Ƙ': 'k',
        'ƙ': 'k',
        'Ⱪ': 'k',
        'ⱪ': 'k',
        'Ĺ': 'a',
        'ĺ': 'l',
        'Ľ': 'l',
        'ľ': 'l',
        'Ļ': 'l',
        'ļ': 'l',
        'Ḷ': 'l',
        'ḷ': 'l',
        'Ḹ': 'l',
        'ḹ': 'l',
        'Ḽ': 'l',
        'ḽ': 'l',
        'Ḻ': 'l',
        'ḻ': 'l',
        'Ł': 'l',
        'ł': 'l',
        'Ł': 'l',
        '̣': 'l',
        'ł': 'l',
        '̣': 'l',
        'Ŀ': 'l',
        'ŀ': 'l',
        'Ƚ': 'l',
        'ƚ': 'l',
        'Ⱡ': 'l',
        'ⱡ': 'l',
        'Ɫ': 'l',
        'ɫ': 'l',
        'ɬ': 'l',
        'ɭ': 'l',
        'ȴ': 'l',
        'Ḿ': 'm',
        'ḿ': 'm',
        'Ṁ': 'm',
        'ṁ': 'm',
        'Ṃ': 'm',
        'ṃ': 'm',
        'ɱ': 'm',
        'Ń': 'n',
        'ń': 'n',
        'Ǹ': 'n',
        'ǹ': 'n',
        'Ň': 'n',
        'ň': 'n',
        'Ñ': 'n',
        'ñ': 'n',
        'Ṅ': 'n',
        'ṅ': 'n',
        'Ņ': 'n',
        'ņ': 'n',
        'Ṇ': 'n',
        'ṇ': 'n',
        'Ṋ': 'n',
        'ṋ': 'n',
        'Ṉ': 'n',
        'ṉ': 'n',
        'Ɲ': 'n',
        'ɲ': 'n',
        'Ƞ': 'n',
        'ƞ': 'n',
        'ɳ': 'n',
        'ȵ': 'n',
        'N': 'n',
        '̈': 'n',
        'n': 'n',
        '̈': 'n',
        'Ó': 'o',
        'ó': 'o',
        'Ò': 'o',
        'ò': 'o',
        'Ŏ': 'o',
        'ŏ': 'o',
        'Ô': 'o',
        'ô': 'o',
        'Ố': 'o',
        'ố': 'o',
        'Ồ': 'o',
        'ồ': 'o',
        'Ỗ': 'o',
        'ỗ': 'o',
        'Ổ': 'o',
        'ổ': 'o',
        'Ǒ': 'o',
        'ǒ': 'o',
        'Ö': 'o',
        'ö': 'o',
        'Ȫ': 'o',
        'ȫ': 'o',
        'Ő': 'o',
        'ő': 'o',
        'Õ': 'o',
        'õ': 'o',
        'Ṍ': 'o',
        'ṍ': 'o',
        'Ṏ': 'o',
        'ṏ': 'o',
        'Ȭ': 'o',
        'ȭ': 'o',
        'Ȯ': 'o',
        'ȯ': 'o',
        'Ȱ': 'o',
        'ȱ': 'o',
        'Ø': 'o',
        'ø': 'o',
        'Ǿ': 'o',
        'ǿ': 'o',
        'Ǫ': 'o',
        'ǫ': 'o',
        'Ǭ': 'o',
        'ǭ': 'o',
        'Ō': 'o',
        'ō': 'o',
        'Ṓ': 'o',
        'ṓ': 'o',
        'Ṑ': 'o',
        'ṑ': 'o',
        'Ỏ': 'o',
        'ỏ': 'o',
        'Ȍ': 'o',
        'ȍ': 'o',
        'Ȏ': 'o',
        'ȏ': 'o',
        'Ơ': 'o',
        'ơ': 'o',
        'Ớ': 'o',
        'ớ': 'o',
        'Ờ': 'o',
        'ờ': 'o',
        'Ỡ': 'o',
        'ỡ': 'o',
        'Ở': 'o',
        'ở': 'o',
        'Ợ': 'o',
        'ợ': 'o',
        'Ọ': 'o',
        'ọ': 'o',
        'Ộ': 'o',
        'ộ': 'o',
        'Ɵ': 'o',
        'ɵ': 'o',
        'Ṕ': 'p',
        'ṕ': 'p',
        'Ṗ': 'p',
        'ṗ': 'p',
        'Ᵽ': 'p',
        'Ƥ': 'p',
        'ƥ': 'p',
        'P': 'p',
        '̃': 'p',
        'p': 'p',
        '̃': 'p',
        'ʠ': 'q',
        'Ɋ': 'q',
        'ɋ': 'q',
        'Ŕ': 'r',
        'ŕ': 'r',
        'Ř': 'r',
        'ř': 'r',
        'Ṙ': 'r',
        'ṙ': 'r',
        'Ŗ': 'r',
        'ŗ': 'r',
        'Ȑ': 'r',
        'ȑ': 'r',
        'Ȓ': 'r',
        'ȓ': 'r',
        'Ṛ': 'r',
        'ṛ': 'r',
        'Ṝ': 'r',
        'ṝ': 'r',
        'Ṟ': 'r',
        'ṟ': 'r',
        'Ɍ': 'r',
        'ɍ': 'r',
        'ᵲ': 'r',
        'ɼ': 'r',
        'Ɽ': 'r',
        'ɽ': 'r',
        'ɾ': 'r',
        'ᵳ': 'r',
        'ß': 's',
        'Ś': 's',
        'ś': 's',
        'Ṥ': 's',
        'ṥ': 's',
        'Ŝ': 's',
        'ŝ': 's',
        'Š': 's',
        'š': 's',
        'Ṧ': 's',
        'ṧ': 's',
        'Ṡ': 's',
        'ṡ': 's',
        'ẛ': 's',
        'Ş': 's',
        'ş': 's',
        'Ṣ': 's',
        'ṣ': 's',
        'Ṩ': 's',
        'ṩ': 's',
        'Ș': 's',
        'ș': 's',
        'ʂ': 's',
        'S': 's',
        '̩': 's',
        's': 's',
        '̩': 's',
        'Þ': 't',
        'þ': 't',
        'Ť': 't',
        'ť': 't',
        'T': 't',
        '̈': 't',
        'ẗ': 't',
        'Ṫ': 't',
        'ṫ': 't',
        'Ţ': 't',
        'ţ': 't',
        'Ṭ': 't',
        'ṭ': 't',
        'Ț': 't',
        'ț': 't',
        'Ṱ': 't',
        'ṱ': 't',
        'Ṯ': 't',
        'ṯ': 't',
        'Ŧ': 't',
        'ŧ': 't',
        'Ⱦ': 't',
        'ⱦ': 't',
        'ᵵ': 't',
        'ƫ': 't',
        'Ƭ': 't',
        'ƭ': 't',
        'Ʈ': 't',
        'ʈ': 't',
        'ȶ': 't',
        'Ú': 'u',
        'ú': 'u',
        'Ù': 'u',
        'ù': 'u',
        'Ŭ': 'u',
        'ŭ': 'u',
        'Û': 'u',
        'û': 'u',
        'Ǔ': 'u',
        'ǔ': 'u',
        'Ů': 'u',
        'ů': 'u',
        'Ü': 'u',
        'ü': 'u',
        'Ǘ': 'u',
        'ǘ': 'u',
        'Ǜ': 'u',
        'ǜ': 'u',
        'Ǚ': 'u',
        'ǚ': 'u',
        'Ǖ': 'u',
        'ǖ': 'u',
        'Ű': 'u',
        'ű': 'u',
        'Ũ': 'u',
        'ũ': 'u',
        'Ṹ': 'u',
        'ṹ': 'u',
        'Ų': 'u',
        'ų': 'u',
        'Ū': 'u',
        'ū': 'u',
        'Ṻ': 'u',
        'ṻ': 'u',
        'Ủ': 'u',
        'ủ': 'u',
        'Ȕ': 'u',
        'ȕ': 'u',
        'Ȗ': 'u',
        'ȗ': 'u',
        'Ư': 'u',
        'ư': 'u',
        'Ứ': 'u',
        'ứ': 'u',
        'Ừ': 'u',
        'ừ': 'u',
        'Ữ': 'u',
        'ữ': 'u',
        'Ử': 'u',
        'ử': 'u',
        'Ự': 'u',
        'ự': 'u',
        'Ụ': 'u',
        'ụ': 'u',
        'Ṳ': 'u',
        'ṳ': 'u',
        'Ṷ': 'u',
        'ṷ': 'u',
        'Ṵ': 'u',
        'ṵ': 'u',
        'Ʉ': 'u',
        'ʉ': 'u',
        'Ṽ': 'v',
        'ṽ': 'v',
        'Ṿ': 'v',
        'ṿ': 'v',
        'Ʋ': 'v',
        'ʋ': 'v',
        'Ẃ': 'w',
        'ẃ': 'w',
        'Ẁ': 'w',
        'ẁ': 'w',
        'Ŵ': 'w',
        'ŵ': 'w',
        'W': 'w',
        '̊': 'w',
        'ẘ': 'w',
        'Ẅ': 'w',
        'ẅ': 'w',
        'Ẇ': 'w',
        'ẇ': 'w',
        'Ẉ': 'w',
        'ẉ': 'w',
        'Ẍ': 'x',
        'ẍ': 'x',
        'Ẋ': 'x',
        'ẋ': 'x',
        'Ý': 'y',
        'ý': 'y',
        'Ỳ': 'y',
        'ỳ': 'y',
        'Ŷ': 'y',
        'ŷ': 'y',
        'Y': 'y',
        '̊': 'y',
        'ẙ': 'y',
        'Ÿ': 'y',
        'ÿ': 'y',
        'Ỹ': 'y',
        'ỹ': 'y',
        'Ẏ': 'y',
        'ẏ': 'y',
        'Ȳ': 'y',
        'ȳ': 'y',
        'Ỷ': 'y',
        'ỷ': 'y',
        'Ỵ': 'y',
        'ỵ': 'y',
        'ʏ': 'y',
        'Ɏ': 'y',
        'ɏ': 'y',
        'Ƴ': 'y',
        'ƴ': 'y',
        'Ź': 'z',
        'ź': 'z',
        'Ẑ': 'z',
        'ẑ': 'z',
        'Ž': 'z',
        'ž': 'z',
        'Ż': 'z',
        'ż': 'z',
        'Ẓ': 'z',
        'ẓ': 'z',
        'Ẕ': 'z',
        'ẕ': 'z',
        'Ƶ': 'z',
        'ƶ': 'z',
        'Ȥ': 'z',
        'ȥ': 'z',
        'ʐ': 'z',
        'ʑ': 'z',
        'Ⱬ': 'z',
        'ⱬ': 'z',
        'Ǯ': 'z',
        'ǯ': 'z',
        'ƺ': 'z',
        '２': '2',
        '６': '6',
        'Ｂ': 'B',
        'Ｆ': 'F',
        'Ｊ': 'J',
        'Ｎ': 'N',
        'Ｒ': 'R',
        'Ｖ': 'V',
        'Ｚ': 'Z',
        'ｂ': 'b',
        'ｆ': 'f',
        'ｊ': 'j',
        'ｎ': 'n',
        'ｒ': 'r',
        'ｖ': 'v',
        'ｚ': 'z',
        '１': '1',
        '５': '5',
        '９': '9',
        'Ａ': 'A',
        'Ｅ': 'E',
        'Ｉ': 'I',
        'Ｍ': 'M',
        'Ｑ': 'Q',
        'Ｕ': 'U',
        'Ｙ': 'Y',
        'ａ': 'a',
        'ｅ': 'e',
        'ｉ': 'i',
        'ｍ': 'm',
        'ｑ': 'q',
        'ｕ': 'u',
        'ｙ': 'y',
        '０': '0',
        '４': '4',
        '８': '8',
        'Ｄ': 'D',
        'Ｈ': 'H',
        'Ｌ': 'L',
        'Ｐ': 'P',
        'Ｔ': 'T',
        'Ｘ': 'X',
        'ｄ': 'd',
        'ｈ': 'h',
        'ｌ': 'l',
        'ｐ': 'p',
        'ｔ': 't',
        'ｘ': 'x',
        '３': '3',
        '７': '7',
        'Ｃ': 'C',
        'Ｇ': 'G',
        'Ｋ': 'K',
        'Ｏ': 'O',
        'Ｓ': 'S',
        'Ｗ': 'W',
        'ｃ': 'c',
        'ｇ': 'g',
        'ｋ': 'k',
        'ｏ': 'o',
        'ｓ': 's',
        'ｗ': 'w'
    };
})();

(function(){
    $AT.modules.Tagger = function (obj) {
        var t = this;
        t.d = {

            $widget: $('<div class="automizy-tagger"></div>'),
            $editor: $('<div class="automizy-tagger-editor"></div>'),
            $tags: $('<span class="automizy-tagger-tags"></span>'),
            $label: $('<label class="automizy-tagger-label"></label>'),
            $input: $('<input class="automizy-tagger-input" />'),

            tags:[],
            unique:true,
            changeFunction:function(){},

            placeholder:'',

            mouseInEditor: false,
            tagList: [],
            normalize: function (term) {
                var ret = "";
                for (var i = 0; i < term.length; i++) {
                    ret += $AT.accentMap[term.charAt(i)] || term.charAt(i);
                }
                return ret;
            }

        };

        t.d.$label.appendTo(t.d.$widget);
        t.d.$editor.appendTo(t.d.$widget);
        t.d.$tags.appendTo(t.d.$editor);
        t.d.$input.appendTo(t.d.$editor).click(function(){
            t.d.$input.keydown();
        }).autocomplete({
            source: function (request, response) {
                var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                var grep = $.grep(t.activeTags(), function (value) {
                    value = value.label || value.value || value;
                    return matcher.test(value) || matcher.test(t.d.normalize(value));
                });
                response(grep);
            },
            open: function() {
                t.widget().find("ul.ui-menu").width(t.d.$editor.innerWidth()).css({
                    overflowY:'auto',
                    overflowX:'hidden',
                    height:'200px'
                });
            },
            appendTo: t.d.$editor,
            position: {
                at:"left bottom",
                of:t.d.$editor
            },
            select:function(event, data){
                event.preventDefault();
                if (event.which === 1) {
                    if(!t.addTagFromInput(data.item.value)){
                        t.d.$input.val('');
                    }
                }
            },
            delay:0,
            minLength:0
        });

        t.d.$editor.mouseenter(function () {
            t.d.mouseInEditor = true;
        }).mouseleave(function () {
            t.d.mouseInEditor = false;
        }).click(function () {
            if (!t.d.$input.is(':focus')) {
                t.d.$input.focus();
            }
        });
        t.d.$input.blur(function () {
            if (!t.d.mouseInEditor) {
                t.d.$input.val('');
            }
        }).keydown(function (event) {
            var keyCode = parseInt(event.keyCode || event.which);
            if (keyCode === 13 || keyCode === 9) {
                event.preventDefault();
                t.addTagFromInput(t.d.$input.val());
            }
        }).focus(function () {
            if(!t.d.$input.val().trim()) {
                t.d.$input.keydown();
            }
        });

        if (typeof obj !== 'undefined') {
            if (typeof obj.target !== 'undefined') {
                t.drawTo(obj.target);
            }
            if (typeof obj.tagList !== 'undefined') {
                t.tagList(obj.tagList);
            }
            if (typeof obj.value !== 'undefined') {
                t.val(obj.value);
            }
            if (typeof obj.width !== 'undefined') {
                t.width(obj.width);
            }
            if (typeof obj.unique !== 'undefined') {
                t.unique(obj.unique);
            }
            if (typeof obj.label !== 'undefined') {
                t.label(obj.label);
            }
            if (typeof obj.placeholder !== 'undefined') {
                t.placeholder(obj.placeholder);
            }
            if (typeof obj.change === 'function') {
                t.change(obj.change);
            }
        }

    };


    var p = $AT.modules.Tagger.prototype;

    p.widget = function () {
        return this.d.$widget;
    };
    p.show = function () {
        this.d.$widget.ashow();
        return this
    };
    p.hide = function () {
        this.d.$widget.ahide();
        return this;
    };
    p.drawTo = function (target) {
        var t = this;
        target = target || $('body');
        if (typeof target.widget === 'function') {
            target = target.widget();
        }
        t.widget().appendTo(target);
        return t;
    };
    p.width = function (width) {
        var t = this;
        if (typeof width !== 'undefined') {
            t.d.width = width;
            t.widget().css('width', t.d.width);
            return t;
        }
        return t.d.width;
    };

    p.change = function (changeFunction) {
        var t = this;
        if (typeof changeFunction === 'function') {
            t.d.changeFunction = changeFunction;
            return t;
        }
        t.d.changeFunction.apply(t, [t.val()]);
        return t;
    };
    p.val = p.tags = function (tags) {
        var t = this;
        if (typeof tags !== 'undefined') {
            t.removeAllTag();
            for(var i = 0; i < tags.length; i++){
                t.addTag($AT.newTag({
                    value: tags[i],
                    tagger: t
                }));
            }
            return t;
        }
        tags = [];
        for(var i = 0; i < t.d.tags.length; i++){
            tags.push(t.d.tags[i].val());
        }
        return tags;
    };
    p.label = function (label) {
        var t = this;
        if (typeof label !== 'undefined') {
            t.d.label = label;
            t.d.$label.html(t.d.label);
            return t;
        }
        return t.d.label;
    };
    p.placeholder = function (placeholder) {
        var t = this;
        if (typeof placeholder !== 'undefined') {
            t.d.placeholder = placeholder;
            t.d.$input.attr('placeholder', t.d.placeholder);
            return t;
        }
        return t.d.placeholder;
    };
    p.unique = function (unique) {
        var t = this;
        if (typeof unique !== 'undefined') {
            t.d.unique = unique;
            return t;
        }
        return t.d.unique;
    };
    p.tagList = function (tagList) {
        var t = this;
        if (typeof tagList !== 'undefined') {
            t.d.tagList = tagList;
            return t;
        }
        return t.d.tagList;
    };
    p.activeTags = function () {
        var t = this;
        var activeTags = [];
        var value = t.val();
        for(var i = 0; i < t.d.tagList.length; i++){
            if(value.indexOf(t.d.tagList[i]) <= -1){
                activeTags.push(t.d.tagList[i]);
            }
        }
        return activeTags;
    };
    p.addTag = function (tag) {
        var t = this;
        tag = tag || $AT.newTag({
            value: t.d.$input.val(),
            tagger: t
        });
        t.d.tags.push(tag);
        t.change();
        return t;
    };
    p.getTag = function (tagName) {
        var t = this;
        for(var i = 0; i < t.d.tags.length; i++){
            if(t.d.tags[i].val() === tagName){
                return t.d.tags[i];
            }
        }
        return false;
    };
    p.addTagFromInput = function (value) {
        var t = this;
        if(value.length > 0) {
            if(t.unique()){
                var tag = t.getTag(value);
                if(tag !== false){
                    tag.highlight();
                    return false;
                }
                t.addTag($AT.newTag({
                    value: value,
                    tagger: t
                }));
                t.d.$input.val('');
                return t;
            }
            t.addTag($AT.newTag({
                value: value,
                tagger: t
            }));
            t.d.$input.val('');
            return t;
        }
        return false;
    };
    p.removeTag = function (tagName) {
        var t = this;
        for(var i = 0; i < t.d.tags.length; i++){
            if(t.d.tags[i].val() === tagName){
                t.d.tags[i].remove();
                t.d.tags.splice(i, 1);
                t.change();
                return t;
            }
        }
        return t;
    };
    p.removeAllTag = function () {
        var t = this;
        for(var i = 0; i < t.d.tags.length; i++){
            t.d.tags[i].remove();
        }
        t.d.tags = [];
        t.change();
        return t;
    };
    p.reset = function(){
        var t = this;
        t.removeAllTag();
        t.d.$input.val('');
        return t;
    };

    $AT.newTagger = function (tagger) {
        if (typeof tagger === 'undefined') {
            return new $AT.modules.Tagger();
        }
        if (tagger instanceof $AT.modules.Tagger) {
            return tagger;
        }
        return new $AT.modules.Tagger(tagger || {});
    };

})();

(function(){
    $AT.modules.Tag = function (obj) {
        var t = this;
        t.d = {

            $widget: $('<div class="automizy-tagger-tag"></div>'),
            $icon: $('<span class="automizy-tagger-tag-icon fa fa-tag"></span>'),
            $content: $('<span class="automizy-tagger-tag-content"></span>'),
            $close: $('<span class="automizy-tagger-tag-close fa fa-times"></span>'),

            value:'',
            tagger:false

        };

        t.d.$icon.appendTo(t.d.$widget);
        t.d.$content.appendTo(t.d.$widget);
        t.d.$close.appendTo(t.d.$widget).click(function(){
            t.tagger().removeTag(t.val());
        });

        if (typeof obj !== 'undefined') {
            if (typeof obj.target !== 'undefined') {
                t.drawTo(obj.target);
            }
            if (typeof obj.value !== 'undefined') {
                t.val(obj.value);
            }
            if (typeof obj.tagger !== 'undefined') {
                t.tagger(obj.tagger);
            }
        }

    };


    var p = $AT.modules.Tag.prototype;

    p.widget = function () {
        return this.d.$widget;
    };
    p.show = function () {
        this.d.$widget.ashow();
        return this
    };
    p.hide = function () {
        this.d.$widget.ahide();
        return this;
    };
    p.highlight = function () {
        this.d.$widget.stop(true, true).effect('highlight');
        return this;
    };
    p.remove = function () {
        var t = this;
        t.d.$widget.remove();
        delete t;
        return t;
    };
    p.tagger = function(tagger){
        var t = this;
        if (typeof tagger !== 'undefined') {
            if(t.d.tagger !== tagger) {
                t.d.tagger = tagger;
                t.drawTo(t.d.tagger.d.$tags);
            }
            return t;
        }
        return t.d.tagger;
    };
    p.drawTo = function (target) {
        var t = this;
        target = target || $('body');
        if (typeof target.widget === 'function') {
            target = target.widget();
        }
        t.widget().appendTo(target);
        return t;
    };

    p.val = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {
            t.d.value = value;
            t.d.$content.html(t.d.value);
            return t;
        }
        return t.d.value;
    };

    $AT.newTag = function (tag) {
        if (typeof tag === 'undefined') {
            return new $AT.modules.Tag();
        }
        if (tag instanceof $AT.modules.Tag) {
            return tag;
        }
        return new $AT.modules.Tag(tag || {});
    };

})();

(function(){
    $AT.pluginsLoaded(function () {

        $AT.$tmp = $('<div id="automizy-tagger-tmp"></div>');

        $AT.layoutReady();
        $AT.ready();
    });
})();

(function(){

})();

(function(){})();