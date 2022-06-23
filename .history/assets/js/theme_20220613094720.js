jQuery(document).ready(function() {
    // slide-home
    // $('.slide-home .box-item').slick({
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true,
    //     arrows: true,
    //     nextArrow: $('.arrow .arrow-left'),
    //     prevArrow: $('.arrow .arrow-right'),
    // });
    // slide new 
    var $st = $('.pagination');
    var $slickEl = $('.new .box-item-new');
    
    $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $st.text(i + ' of ' + slick.slideCount);
    });
    
    $slickEl.slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        arrows: true,
        dots: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ]
    });

});