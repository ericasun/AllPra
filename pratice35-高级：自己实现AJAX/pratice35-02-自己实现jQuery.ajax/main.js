/*第36课添加的代码*/
window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

//封装   此时ajax返回值是underfined
window.jQuery.ajax = function(url,method,body,successFn,failFn){
    console.log(url);
    let request = new XMLHttpRequest()
    //请求第一部分
    request.open(method, url) //配置request

    /*第36课添加代码结束*/
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            //获取响应第一部分
            if(request.status >= 200 && request.status <300){
                successFn.call(undefined,request.responseText)
            }else if(request.status >= 400){
                failFn.call(undefined,request)
            }
        }
    }
    //请求第四部分
    request.send(body)
}

/*第36课添加的代码*/
window.$ = window.jQuery
/*第36课添加代码结束*/

myButton.addEventListener('click',(e)=>{
    /*第36课添加的代码*/

    //调用
    window.jQuery.ajax(
        '/xxx',
        'get',
        'a=1&b=2',
        (responseText) =>{ console.log(1)},
        (request)=>{ console.log(2)}
    )
/*第36课添加代码结束*/
})