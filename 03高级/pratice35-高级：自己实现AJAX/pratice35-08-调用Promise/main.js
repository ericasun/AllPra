/*第36课添加的代码*/
window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

//此时ajax返回的是一个promise对象
window.jQuery.ajax = function({url,method,body,headers}){
    //方法1
    //let {url,method,body,successFn,failFn,headers} = options
    return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest()
        //请求第一部分
        request.open(method, url) //配置request

        for(let key in headers){
            let value = headers[key]
            request.setRequestHeader(key,value)
        }

        /*第36课添加代码结束*/
        request.onreadystatechange = ()=>{
            if(request.readyState === 4){
                //获取响应第一部分
                if(request.status >= 200 && request.status <300){
                    resolve.call(undefined,request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined,request)
                }
            }
        }
        //请求第四部分
        request.send(body)
    })
    
}

/*第36课添加的代码*/
window.$ = window.jQuery
/*第36课添加代码结束*/

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click',(e)=>{
    /*第36课添加的代码*/
   let promise = window.jQuery.ajax({
        url:'frank3838',
        method:'get',
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'frank':'18'
        }
    })

    promise.then(
        (text)=>{console.log(text)},
        (request)=>{console.log(request)}
    )
/*第36课添加代码结束*/
})