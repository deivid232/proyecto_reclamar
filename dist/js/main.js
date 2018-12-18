/*____Document map_____
[1] Variable Declarations
[2] Counters
[3] iosFix
[4] Parallax
[5] Images Loaded(Shuffle Filter)
[6] Resize navbar
[7] Hover Dropdown
[8] Post Carousel
[9] Testimonials Carousel
[10] Advisor Carousel
[11] Home Carousel
[12] Widget
[13] Modal Project
[14] Google Map
[15] YTPlayer
_______________________*/
(function () {
    "use strict";

    jQuery(document).ready(function ($) {
        /*[1] Variable Declarations*/
        var options = {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.'
            },
            counters = [
                new CountUp("counter1", 0, 68, 0, 1.5, options),
                new CountUp("counter2", 0, 153, 0, 1.5, options),
                new CountUp("counter3", 0, 44, 0, 1.5, options),
                new CountUp("counter4", 0, 91, 0, 1.5, options)
            ],
            nav_link = $("ul.navbar-nav .nav-link"),
            nav_item = $('ul.navbar-nav li.nav-item'),
            bg_video = $("#bgndVideo"),
            navbar = $(".navbar"),
            top_bar = $("header .top-bar"),
            counter_point = $("#counters"),
            iosFix = $(".btn-card, .service, .card-member, .btn-filter, .mesh-element"),
            parallax_box = $(".parallax-window"),
            gridPortfolio = $(".grid"),
            owl_post = $(".owl-post"),
            owl_home = $("#owl-home"),
            owl_testimonials = $("#owl-testimonials"),
            owl_advisor = $("#owl-advisor"),
            btn_filter_box = $(".btn-filter-box"),
            btn_filter_array = [$("#btn-all"), $("#btn-consulting"), $("#btn-finance"), $("#btn-marketing")],
            recent_posts = $(".latest-posts-widget .recents"),
            popular_posts = $(".latest-posts-widget .popular"),
            recent_btn = $(".latest-posts-widget .recent-btn"),
            popular_btn = $(".latest-posts-widget .popular-btn"),
            modal_portfolio_body = $("#modal-project1 .modal-body"),
            modal_portfolio_header = $("#modal-project1 .modal-header");

        /*[2] Counters*/
        $(counter_point).waypoint(function () {
            for (var j = 0; j < counters.length; j++) {
                counters[j].start();
            }
        }, {
            offset: '80%'
        });

        /*[3] iosFix*/
        iosFix.on('click', function () {
            /* event for fix hover animation for IOS Safari */
        });

        /*[4] Parallax*/
        $(parallax_box).parallax({imageSrc: 'http://via.placeholder.com/1920x1080'});

        /*[5] Images Loaded(Shuffle Filter)*/
        imagesLoaded(gridPortfolio, function () {
            $(btn_filter_box).on("click", ".btn-filter", function () {
                for (var i = 0; i < btn_filter_array.length; i++) {
                    btn_filter_array[i].removeClass("active-link");
                }
                var $this = $(this);
                $this.addClass("active-link");
            });
            gridPortfolio.shuffle({
                itemSelector: '.mesh-element',
                speed: 500,
                easing: 'ease-out'
            });
            $(btn_filter_box).on("click", function (e) {
                if ($(e.target).is("#btn-all")) {
                    gridPortfolio.shuffle('shuffle', function ($el, shuffle) {
                        return true;
                    });
                }
                if ($(e.target).is("#btn-consulting")) {
                    gridPortfolio.shuffle('shuffle', function ($el, shuffle) {
                        return $el.data('group') === 'consulting';
                    });
                }
                if ($(e.target).is("#btn-finance")) {
                    gridPortfolio.shuffle('shuffle', function ($el, shuffle) {
                        return $el.data('group') === 'finance';
                    });
                }
                if ($(e.target).is("#btn-marketing")) {
                    gridPortfolio.shuffle('shuffle', function ($el, shuffle) {
                        return $el.data('group') === 'marketing';
                    });
                }
            });
        });

        /*[6] Resize navbar*/
        $(window).on("scroll", function () {
            var $this = $(this);
            if ($this.scrollTop() >= 100) {
                if ($this.innerWidth() > 991) {
                    nav_link.addClass("small-nav");
                }
                top_bar.css("height", "25");
            }
            if ($this.scrollTop() < 100) {
                if ($this.innerWidth() > 991) {
                    nav_link.removeClass("small-nav");
                }
                if ($this.innerWidth() <= 576) {
                    top_bar.css("height", "45");
                } else {
                    top_bar.css("height", "30");
                }
            }
        });

        /*[7] Hover Dropdown*/
        if ($(window).innerWidth() > 991) {
            $(nav_item).on("mouseenter", function (e) {
                $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
            });
            $(nav_item).on("mouseleave", function (e) {
                $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
            });
        }
        /*[8] Post Carousel*/
        owl_post.owlCarousel({
            navigation: true,
            dots: true,
            autoplay: 3000,
            slideSpeed: 200,
            paginationSpeed: 400,
            items: 1,
            loop: true
        });

        /*[9] Testimonials Carousel*/
        owl_testimonials.owlCarousel({
            dots: false,
            navigation: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            autoplay: 3000,
            items: 1,
            loop: true
        });

        /*[10] Advisor Carousel*/
        owl_advisor.owlCarousel({
            dots: false,
            navigation: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            autoplay: 3000,
            items: 1,
            loop: true
        });

        /*[11] Home Carousel*/
        owl_home.owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400,
            autoplay: 3000,
            dots: true,
            items: 1,
            loop: true
        });

        /*[12] Widget*/
        $(document.body).on("click", function (e) {
            if (($(e.target).is(".latest-posts-widget .recent-btn")) ||
                ($(e.target).is(".latest-posts-widget .recent-btn span"))) {
                recent_posts.css("display", "block");
                popular_posts.css("display", "none");
                recent_btn.css("border-bottom", "3px solid #0288d1");
                popular_btn.css("border-bottom", "3px solid transparent");
            }
            if (($(e.target).is(".latest-posts-widget .popular-btn")) ||
                ($(e.target).is(".latest-posts-widget .popular-btn span"))) {
                popular_posts.css("display", "block");
                recent_posts.css("display", "none");
                popular_btn.css("border-bottom", "3px solid #0288d1");
                recent_btn.css("border-bottom", "3px solid transparent");
            }
        });


        /*[13] Modal Project*/
        $(gridPortfolio).on("click", ".action-btn", function () {
            var $this = $(this),
                src = $this.data("image"),
                title = $this.data("title");
            $(".portfolio-section #modal-project1 .modal-header h5").remove();
            $(".portfolio-section #modal-project1 .modal-body img").remove();
            $(modal_portfolio_body).append('<img src=' + src + ' class="img-fluid">');
            $(modal_portfolio_header).prepend('<h5 class="modal-title">' + title + '</h5>');
        });

        /*[14] Google Map*/
        var mapElem = document.getElementById('map');
        if (mapElem) {
            google.maps.event.addDomListener(window, 'load', initMap);

            function initMap() {
                var map = new google.maps.Map(mapElem, {
                    zoom: 12,
                    center: new google.maps.LatLng(34.0768184, -118.3932536),
                    scrollwheel: false
                });
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(34.0768184, -118.3932536),
                    map: map
                });
                var infowindow = new google.maps.InfoWindow({
                    content: 'One Boulevard, Beverly Hills'
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });
            }
        }

        /*[15] YTPlayer*/
        jQuery(bg_video).YTPlayer();
    });

})();
