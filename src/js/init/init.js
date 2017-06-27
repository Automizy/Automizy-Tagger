define([], function () {
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
            }
        ]
    });
});