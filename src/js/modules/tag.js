define([
    "js/init/init"
], function () {
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

});
