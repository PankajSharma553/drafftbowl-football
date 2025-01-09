$(document).ready(function () {
    $('.bannerSlider').slick({
        // centerMode: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        dots:true,
        speed: 500,
        autoplaySpeed:80000000,

    });
});

// testimonial section 
$(document).ready(function () {
    $('.testimonialSlider').slick({
        slidesToShow: 3,
        autoplay: true,
        arrows: false,
        dots:true,
        speed: 500,
        autoplaySpeed:8000000,

    });
});