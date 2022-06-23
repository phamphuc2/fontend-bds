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
    $('.new .box-new .box-item').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      });

});