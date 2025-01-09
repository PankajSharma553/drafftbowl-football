$(document).ready(function () {
    $('.heroSlider').slick({
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 500,
        autoplaySpeed:800,

    });
});

// testimonial section 
$(document).ready(function () {
    $('.testimonialSlider').slick({
        slidesToShow: 3,
        autoplay: true,
        arrows: false,
        dots: true,
        speed: 500,
        autoplaySpeed: 8000000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ],
    });
});


// Navbar menu

const navbar = document.querySelector(".header_navbar");
const humburger = document.querySelector(".humburger");
const close = document.querySelector(".close_menu");

humburger.addEventListener("click", function () {
    navbar.classList.add("active");
});
close.addEventListener("click", function () {
    navbar.classList.remove("active");
});


