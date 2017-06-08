define([
    "js/init/init"
], function () {
    $AT.pluginsLoaded(function () {

        $AT.$tmp = $('<div id="automizy-tagger-tmp"></div>');

        $AT.layoutReady();
        $AT.ready();
    });
});