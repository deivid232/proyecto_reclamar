$(document).ready(function () {
    $("[data-link]").on("click", function (event) {
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        event.preventDefault();
        $('body,html').animate({scrollTop: top}, 1000);
    });

    if (window.innerWidth >= 992) {
        $(".doc-row").waypoint(function () {
            $(".menu-navigation").css({
                "top": "0",
                "position": "fixed"
            });
        }, {offset: '0%'});
        $(".info").waypoint(function () {
            $(".menu-navigation").css({
                "position": "static"
            });
        }, {offset: '0%'});
        $(window).scroll(function () {
            $(".doc-row").waypoint(function () {
                $(".menu-navigation").css({
                    "top": "0",
                    "position": "fixed"
                });
            }, {offset: '0%'});
            $(".info").waypoint(function () {
                $(".menu-navigation").css({
                    "position": "static"
                });
            }, {offset: '0%'});
        });
    }
});