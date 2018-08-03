/**
 * Created by Administrator on 2018/1/23 0023.
 */

!function(){
    window.addEventListener('scroll',function(x){
        if(window.scrollY > 0){
            topNavBar.classList.add('sticky')
        }else{
            topNavBar.classList.remove('sticky')
        }
    })
}.call

