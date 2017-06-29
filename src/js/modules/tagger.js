define([
    "js/init/init"
], function () {
    $AT.modules.Tagger = function (obj) {
        var t = this;
        t.d = {

            $widget: $('<div class="automizy-tagger"></div>').click(function () {
                t.d.$input.keyup();
            }),
            $editor: $('<div class="automizy-tagger-editor"></div>'),
            $tags: $('<span class="automizy-tagger-tags"></span>'),
            $tagList: $('<div class="automizy-tagger-tag-list"></div>').appendTo('body').hide(),
            $label: $('<label class="automizy-tagger-label"></label>'),
            $input: $('<input class="automizy-tagger-input" />'),

            tags: [],
            addedTag:false,
            removedTag:false,
            unique: true,
            changeFunction: function () {},

            placeholder: '',

            mouseInEditor: false,
            tagList: [],
            tagListElements: {},
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
        t.d.$input.appendTo(t.d.$editor).keyup(function () {
            t.filter();
            t.showTagListBox();
        }).blur(function () {
            t.d.$tagList.hide();
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
            if (!t.d.$input.val().trim()) {
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

    p.filter = function (value) {
        var t = this;

        value = (value || t.d.$input.val()).replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        var matcher = new RegExp(value, "i");
        var grep = $.grep(t.activeTags(), function (value) {
            return matcher.test(value) || matcher.test(t.d.normalize(value));
        });
        for (var i in t.d.tagListElements) {
            t.d.tagListElements[i].hide();
        }
        for (var i = 0; i < grep.length; i++) {
            t.d.tagListElements[grep[i]].show();
        }

        return t;
    };

    p.showTagListBox = function () {
        var t = this;

        var targetOffset = t.d.$widget.offset();
        var targetOffsetTop = targetOffset.top;
        var targetOffsetLeft = targetOffset.left;
        var targetHeight = t.d.$widget.height();
        t.d.$tagList.css({
            bottom: 'auto',
            left: targetOffsetLeft + 'px',
            top: (targetOffsetTop + targetHeight) + 'px'
        }).width(t.d.$editor.innerWidth()).show();

        return t;
    };

    p.change = function (changeFunction) {
        var t = this;
        if (typeof changeFunction === 'function') {
            t.d.changeFunction = changeFunction;
            return t;
        }
        t.d.changeFunction.apply(t, [t.val(), t.d.addedTag, t.d.removedTag]);
        t.d.addedTag = false;
        t.d.removedTag = false;
        return t;
    };
    p.val = p.tags = function (tags) {
        var t = this;
        if (typeof tags !== 'undefined') {
            t.removeAllTag();
            for (var i = 0; i < tags.length; i++) {
                t.addTag($AT.newTag({
                    value: tags[i],
                    tagger: t
                }));
            }
            return t;
        }
        tags = [];
        for (var i = 0; i < t.d.tags.length; i++) {
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
            t.d.$tagList.empty();
            t.d.tagListElements = {};
            for (var i = 0; i < t.d.tagList.length; i++) {
                t.d.tagListElements[t.d.tagList[i]] = $('<div class="automizy-tagger-tag-list-element"></div>').data('automizy-value', t.d.tagList[i]).appendTo(t.d.$tagList).text(t.d.tagList[i]).mousedown(function (event) {
                    event.preventDefault();
                }).click(function (event) {
                    event.preventDefault();
                    if (event.which === 1) {
                        if (!t.addTagFromInput($(this).data('automizy-value'))) {
                            t.d.$input.val('');
                        }
                    }
                    t.filter();
                });
            }
            return t;
        }
        return t.d.tagList;
    };
    p.activeTags = function () {
        var t = this;
        var activeTags = [];
        var value = t.val();
        for (var i = 0; i < t.d.tagList.length; i++) {
            if (value.indexOf(t.d.tagList[i]) <= -1) {
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
        t.d.addedTag = tag.val();
        t.change();
        return t;
    };
    p.getTag = function (tagName) {
        var t = this;
        for (var i = 0; i < t.d.tags.length; i++) {
            if (t.d.tags[i].val() === tagName) {
                return t.d.tags[i];
            }
        }
        return false;
    };
    p.addTagFromInput = function (value) {
        var t = this;
        if (value.length > 0) {
            if (t.unique()) {
                var tag = t.getTag(value);
                if (tag !== false) {
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
        for (var i = 0; i < t.d.tags.length; i++) {
            if (t.d.tags[i].val() === tagName) {
                t.d.removedTag = t.d.tags[i].val();
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
        for (var i = 0; i < t.d.tags.length; i++) {
            t.d.tags[i].remove();
        }
        t.d.tags = [];
        t.change();
        return t;
    };
    p.reset = function () {
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

});
