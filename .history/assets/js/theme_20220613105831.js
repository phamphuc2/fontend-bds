jQuery(document).ready(function() {
    // slide-home
    $('.slide-home .box-item').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        nextArrow: $('.arrow .arrow-left'),
        prevArrow: $('.arrow .arrow-right'),
    });

    // slide new 
    var $slickEl = $('.new .box-item-new');
    $slickEl.slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

});