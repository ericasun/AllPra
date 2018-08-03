/**
 * Created by Administrator on 2018/1/15 0015.
 */
myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()
    request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        console.log('请求响应都完毕了')

        if(request.status >= 200 && request.status <300){
            console.log('说明请求成功')
            console.log(request.responseText)
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(request.responseText,"text/xml")
            let c = xmlDoc.getElementsByTagName('body')[0].textContent
            //获取服务器 response.write（）字符串内,相应标签内容
            let title = xmlDoc.getElementsByTagName('heading')[0].textContent
            console.log(title)
        }else if(request.status >= 400){
            console.log('说明请求失败')
        }
    }
}
    request.open('GET','/xxx') //配置request
    request.send()
})