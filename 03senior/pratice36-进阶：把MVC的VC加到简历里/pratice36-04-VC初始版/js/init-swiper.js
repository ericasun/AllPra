/**
 * Created by Administrator on 2018/1/23 0023.
 */
!function(){
    var view = document.querySelector('#mySlides')

    var controller = function(view){
        var mySwiper = new Swiper (view.querySelector('.swiper-container'), {
            // Optional parameters
            loop: true,

            // If we need paginatison
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
            }
        })
    }
    controller(view)
}.call()

