(function () {
    if (window.localStorage) {
        if (!localStorage.getItem('firstLoad')) {
            localStorage['firstLoad'] = true;
            window.location.reload();
        } else
            localStorage.removeItem('firstLoad');
    }
})();
$(document).ready(function () {
    $(window).scroll(function () {
        var $scrollingDiv = $("#navbar");
        $scrollingDiv.stop()
        $scrollingDiv.css("background-color", (($(window).scrollTop() / $(document).height()) > 0.15) ? "#242629" : "");
        $scrollingDiv.css("transition", (($(window).scrollTop() / $(document).height()) > 0.15) ? "5s ease;" : "");
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height() + $(window).height();
            if (bottom_of_window >= bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 2000);
            }
        });
    });
    /*$(window).scroll(function () {

    });*/
});
$(document).ready(function () {

});