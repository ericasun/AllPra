/**
 * Created by Administrator on 2018/2/3 0003.
 */

//如何调用
//var view = View('.xxx')

window.View = function(selector){
    return document.querySelector(selector);
}
