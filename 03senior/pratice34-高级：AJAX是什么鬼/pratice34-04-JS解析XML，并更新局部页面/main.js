/**
 * Created by Administrator on 2018/1/15 0015.
 */
myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()
    request.open('GET','/xxx') //配置request
    request.send()
    console.log(request)
})