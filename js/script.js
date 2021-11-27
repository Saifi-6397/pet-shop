$(function() {
    $(".nav-btn").click(function() {
        $("header nav li").slideToggle();
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop()) {
            $("header").addClass('scroll')
        } else {
            $('header').removeClass('scroll');
        }
    });

    AOS.init({
        duration: 1000,
        delay: 400,

    });

})