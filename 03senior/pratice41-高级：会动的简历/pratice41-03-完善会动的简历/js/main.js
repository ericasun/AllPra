/**
 * Created by Administrator on 2018/2/4 0004.
 */

var result = `/*
    *面试官你好，我是xxx
    *我将以动画的形式来介绍我自己
    *只用文字介绍太单调了
    *我就用代码来介绍吧
    *首先准备一些样式
    */

    *{
        transition:all 1s;
    }
    html{
        background:rgb(222,222,222);
        font-size:16px;
    }
    #code{
        border:1px solid red;
        padding:16px;
    }

    `

var n = 0
var id = setInterval(()=>{
    n += 1
    styleTag.innerHTML = result.substring(0,n)
    code.innerHTML = result.substring(0,n)
    // 高亮标签——方法1
    code.innerHTML = code.innerHTML.replace('html','<span style="color:red;">html</span>')

    if(n>=result.length){
        window.clearInterval(id)
    }
},10)
