$(document).ready(function() {

    // Stick header
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 62) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }   
    });
    
    //   menu-mobile
    $('.menu-mobile-icon').click(function() {
        $('.menu-mobile').addClass('open');
        $(".overlays").addClass("open");
        $("html").css({ " overflow ": "hidden" });
    });

    $('.menu-mobile .icon-close').click(function() {
        $('.menu-mobile').removeClass('open');
        $(".overlays").removeClass("open");
        $("html").css({ " overflow ": "hidden" });
    });
    $(".overlays").click(function() {
        $(".menu-mobile").removeClass("open");
        $(this).removeClass("open");
        $("html").css({ " overflow ": "scroll" });

    });
    // end menu-mobile
    
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
    // end slide-new 

    // slide new 
    var $slickEl = $('.new .box-new');
    $slickEl.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: $('.new .arrow .arrow-left'),
        prevArrow: $('.new  .arrow .arrow-right'),
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
          ]
    });

    // popup
    $('.modal-toggle').on('click', function(e) {
        e.preventDefault();
        $('.modal').toggleClass('is-visible');
      });


      // Scroll to top
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 62) {
            $('.btn-goToTop').fadeIn();
            $('.header').addClass('header-sticky');
        } else {
            $('.btn-goToTop').fadeOut();
            $('.header').removeClass('header-sticky');
        }
    });
    $('.btn-goToTop').click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
        
    });


    //   // Slider Gallery Product
    $('.shop-container .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
    $('.shop-container .slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,
        dots: false,
    });

});

