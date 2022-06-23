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
      centerMode: true,
      arrows: true,
      centerPadding: '5px',
      slidesToShow: 3,
      focusOnSelect: true,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

});