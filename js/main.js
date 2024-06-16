/**
 * Template Name: Selecao - v4.7.0
 * Template URL: https://bootstrapmade.com/selecao-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */ // swiper loop모드에서 activeIndex 찾기 함수 (인덱스 0부터 시작)
$(function() {
    let winWidth = $(window).width();
    var myFullpage = new fullpage("#fullpage", {
        anchors: ["visual", "solution", "business", "history", "partner", "contact"],
        responsiveWidth: 1024,
        menu: ".nav",
        normalScrollElements: '.modal'
    });
    $(window).on("resize", function() {
        winWidth = $(window).width();
        if (winWidth > 1024) {
            $(".layer_menu").removeClass("is_active");
        }
    });
    
        const swiper3 = new Swiper(".partner_swiper", {
          slidesPerView: 1,
          spaceBetween: 20,
          // Navigation arrows
          navigation: {
            nextEl: ".partner_sec .swiper-button-next",
            prevEl: ".partner_sec .swiper-button-prev",
          },
          observer: true,
          observeParents: true,
//          slidesOffsetBefore: 50,
//          slidesOffsetAfter: 50,
          pagination: {
            el: ".partner_sec  .swiper-pagination",
            type: "bullets",
          },
          breakpoints: {
            1025: {
              grid: {
                rows: 2,
              },
            },
          },
        });
    
    const swiper2 = new Swiper(".solution_swiper", {
        loop: true,
		initialSlide:1,
        navigation: {
            nextEl: ".solution_sec .swiper-button-next",
            prevEl: ".solution_sec .swiper-button-prev",
        },
        //          on: {
        //                  slideChangeTransitionEnd: function () {
        //                        $(".btn_solution").removeClass("is_active").eq( this.activeIndex).addClass("is_active");
        //                    },
        //          },
    });

    swiper2.on("slideChangeTransitionEnd", function() {
        $(".btn_solution").removeClass("is_active").eq(this.realIndex).addClass("is_active");
    });

    $(".btn_solution").on("click", function() {
        var idx = $(this).index();
        $(".btn_solution").removeClass("is_active");
        $(this).addClass("is_active");
        swiper2.slideTo(idx);
    });
    $(".btn_menu").on("click", function() {
        $(".layer_menu").addClass("is_active");
    });

    $(".btn_close, .item_nav").on("click", function() {
        $(".layer_menu").removeClass("is_active");
    });
    $(".partner_sec .btn_tab").on("click", function() {
        var idx = $(this).index();
        $(".btn_tab").removeClass("is_active");
        $(this).addClass("is_active");
        $(".tab_panel").removeClass("is_active").eq(idx).addClass("is_active");
    });
    
    $("#back-to-top").on("click", function(){
        $(".modal").animate({scrollTop:'0' },500);
    });
    
    $(".modal").scroll(function() {
    if ($(".modal").scrollTop() > 100) {
      $('#back-to-top').addClass('show');
    } else {
      $('#back-to-top').removeClass('show');
    }
  });
});

