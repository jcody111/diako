/* ===================================== Play Video  */
var video = $("#video video");
$(".video:not(.play) .play-icon").click(function () {
    if ($(".video-container .video").hasClass("play")) {
        video.get(0).pause();
    }
    else {
        video.get(0).play();
        $(".video-container .video").toggleClass("play");
    }
});

video.on("pause", function (e) {
    $(".video-container .video").toggleClass("play");
});

/* ===================================== course-slider */
if ($("#course-slider").length) {
    $("#course-slider .owl-carousel").owlCarousel({
        rtl: true,
        loop: true,
        dots: false,
        rewind: true,
        navText: ["", ""],
        navContainer: "#course-slider .owl-carousel",
        autoplay: true,
        autoplayTimeout: 4000,
        slideSpeed: 800,
        smartSpeed: 1000,
        responsiveClass: true,
        margin: 4,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
}


if ($("#coursees-slider").length) {
    $("#coursees-slider .owl-carousel").owlCarousel({
        rtl: true,
        loop: true,
        dots: false,
        rewind: true,
        navText: ["", ""],
        navContainer: "#coursees-slider .owl-carousel",
        autoplay: true,
        autoplayTimeout: 4000,
        slideSpeed: 800,
        smartSpeed: 1000,
        responsiveClass: true,
        margin: 4,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
}