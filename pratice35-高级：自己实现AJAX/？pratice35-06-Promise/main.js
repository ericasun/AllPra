myButton.addEventListener('click',(e)=>{
    /*第36课添加的代码*/
    $.ajax({
        url:'/xxx',
        method:'get',
    }).then(
         (responseText)=>{
            console.log(responseText);
            return responseText
        },
        (request)=>{
            console.log('error');
            return '已经处理'
        }
    ).then(
         (responseText)=>{
            console.log(responseText)
        },
        (request)=>{console.log('error2')}
    )
    /*第36课添加代码结束*/
})