define([
    "js/init/init"
], function () {
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
                t.widget().find("ul.ui-menu").width(t.d.$editor.innerWidth());
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
            if (typeof obj.unique !== 'undefined') {
                t.unique(obj.unique);
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
    p.unique = function (unique) {
        var t = this;
        if (typeof unique !== 'undefined') {
            t.d.unique = unique;
            return t;
        }
        return t.d.unique;
    };
    p.availableTags = function (availableTags) {
        var t = this;
        if (typeof availableTags !== 'undefined') {
            t.d.availableTags = availableTags;
            return t;
        }
        return t.d.availableTags;
    };
    p.activeTags = function () {
        var t = this;
        var activeTags = [];
        var value = t.val();
        for(var i = 0; i < t.d.availableTags.length; i++){
            if(value.indexOf(t.d.availableTags[i]) <= -1){
                activeTags.push(t.d.availableTags[i]);
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

});
