myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()
    //请求第一部分
    request.open('get','/xxx') //配置request
    request.setRequestHeader('frank','18');
    //请求第二部分
    request.setRequestHeader('Content-Type','x-www-form-urlencoded');
    //请求第四部分
    request.send('我偏要设置request第四部分')
    request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        console.log('请求响应都完毕了')
        console.log(request.status)
        console.log(request.statusText)
        //获取响应第一部分
        if(request.status >= 200 && request.status <300){
            console.log('说明请求成功')
            //获取响应的第二部分
            console.log(request.getResponseHeader('Content-Type'))
            //获取请求第四部分
            console.log(request.responseText)
            let string = request.responseText
            
            //把符合JSON语法的字符串转换成JS对应的值
            let object = window.JSON.parse(string)
            //JSON.parse 是浏览器提供的

        }else if(request.status >= 400){
            console.log('说明请求失败')
        }
    }
}
})