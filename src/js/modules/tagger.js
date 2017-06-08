define([
    "js/init/init"
], function () {
    $AT.modules.Tagger = function (obj) {
        var t = this;
        t.d = {

            $widget: $('<div class="automizy-tagger"></div>'),
            $editor: $('<div class="automizy-tagger-editor"></div>'),
            $tags: $('<div class="automizy-tagger-tags"></div>'),
            $label: $('<label class="automizy-tagger-label"></label>'),
            $input: $('<input class="automizy-tagger-input" />'),

            mouseInEditor: false,
            availableTags: [],
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
        t.d.$input.appendTo(t.d.$editor).autocomplete({
            source: function (request, response) {
                var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                response($.grep(t.d.availableTags, function (value) {
                    value = value.label || value.value || value;
                    return matcher.test(value) || matcher.test(t.d.normalize(value));
                }));
            },
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
        }).keydown(function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 13 || keyCode == 9) {
                e.preventDefault();
                var value = t.d.$input.val();
                if(value.length > 0) {
                    $('<span></span>').html(value).appendTo(t.d.$tags);
                    $AT.newTag({
                        value: t.d.$input.val(),
                        target: t.d.$tags
                    });
                    t.d.$input.val('');
                }
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
            if (typeof obj.tags !== 'undefined') {
                t.tags(obj.tags);
            }
            if (typeof obj.availableTags !== 'undefined') {
                t.availableTags(obj.availableTags);
            }
            if (typeof obj.value !== 'undefined') {
                t.val(obj.value);
            }
            if (typeof obj.width !== 'undefined') {
                t.width(obj.width);
            }
            if (typeof obj.label !== 'undefined') {
                t.label(obj.label);
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

    p.change = function (changeFunction) {
        var t = this;
        if (typeof changeFunction === 'function') {
            t.d.changeFunction = changeFunction;
            return t;
        }
        t.d.changeFunction.apply(t, [t.val()]);
        return t;
    };
    p.val = function (value) {
        var t = this;
        if (typeof value !== 'undefined') {

            return t;
        }
        var value = [];
        return value;
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
    p.availableTags = function (availableTags) {
        var t = this;
        if (typeof availableTags !== 'undefined') {
            t.d.availableTags = availableTags;
            return t;
        }
        return t.d.availableTags;
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

});
