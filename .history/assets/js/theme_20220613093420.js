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
// Slider The Lounge
var $status = $('.pagingInfo');
var $slickElement = $('.section-the-lounge .list_taxonomy .wrap_taxonomy');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
        return;
    }

    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + (slick.$dots[0].children.length));
});

$('.section-the-lounge .list_taxonomy .wrap_taxonomy').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    arrows: true,
    dots: true,
    focusOnSelect: true,
    prevArrow: '.section-the-lounge .slider_bottom .button-slick.prev',
    nextArrow: '.section-the-lounge .slider_bottom .button-slick.next',
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
});

});