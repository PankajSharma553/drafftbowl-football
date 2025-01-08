$(document).ready(function () {
    $('.bannerSlider').slick({
        // centerMode: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: true,
        dots:false,
        speed: 500,
        autoplaySpeed:800,

    });
});

// testimonial section 
$(document).ready(function () {
    $('.testimonialSlider').slick({
        slidesToShow: 3,
        autoplay: true,
        arrows: true,
        dots:false,
        speed: 500,
        autoplaySpeed:800,

    });
});