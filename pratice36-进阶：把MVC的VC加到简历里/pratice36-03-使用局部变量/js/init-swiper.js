/**
 * Created by Administrator on 2018/1/23 0023.
 */
!function(){
    var mySwiper = new Swiper ('.swiper-container', {
// Optional parameters
        loop: true,

// If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

// Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

// And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
   })
}.call()

