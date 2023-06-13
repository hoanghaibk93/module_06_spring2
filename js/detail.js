
$('.slider').slick({
    // autoplay: true,
    // autoplaySpeed : 3000,
    pauseOnFocus: false,
    prevArrow: '<span class="left-icon"><i class="fas fa-angle-left"></i><span/>',
    nextArrow: '<span class="right-icon"><i class="fas fa-angle-right"></i><span/>',
    slidesToShow: 1,
    // centerMode: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            },
        },
    ]
});

