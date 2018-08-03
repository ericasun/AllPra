/**
 * Created by Administrator on 2018/1/23 0023.
 */

!function(){
    var view = document.querySelector('#topNavBar')

    var controller = function(view){
        window.addEventListener('scroll',function(x){
            if(window.scrollY > 0){
                view.classList.add('sticky')
            }else{
                view.classList.remove('sticky')
            }
        })
    }

    controller(view)
}.call

