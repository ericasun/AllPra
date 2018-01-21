function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click',(e)=>{
    /*第36课添加的代码*/
    window.jQuery.ajax({
        url:'/frank',
        method:'get',
        success:(x)=>{
            f1.call(undefined,x)
            f2.call(undefined,x)
        },

        error:(x)=>{
            console.log(x)
            console.log(x.status)
            console.log(x.responseText)
        }
    })
    /*第36课添加代码结束*/
})