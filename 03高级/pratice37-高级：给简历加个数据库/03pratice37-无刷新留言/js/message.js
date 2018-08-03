/**
 * Created by Administrator on 2018/1/31 0031.
 */

//初始化
var APP_ID = 'FqPJXxCv1gabu5JMeHrved6l-gzGzoHsz';
var APP_KEY = 'Eevd4W01afMxVUg9s2pDDTr4';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

////创建TestObject表
//var TestObject = AV.Object.extend('TestObject');
//
////在表中创建一行数据
//var testObject = new TestObject();
//
////数据内容是words: 'Hello World!'
////如果保存成功，则运行alert('')
//testObject.save({
//    words: 'Hello World!'
//}).then(function(object) {
//    alert('LeanCloud Rocks!');
//})

var query = new AV.Query('Message3');
query.find()
    .then(
        function (messages) {
            let array = messages.map((item)=> item.attributes)
            array.forEach((item)=>{
                let li = document.createElement('li')
                li.innerText = `${item.name}: ${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
             })
        }
    )


let myForm = document.querySelector('#postMessage')

myForm.addEventListener('submit',function(e){
    console.log(e)
    e.preventDefault()
    let name = myForm.querySelector('input[name=name]').value
    let content = myForm.querySelector('input[name=content]').value
    
    var Message = AV.Object.extend('Message3');
    var message = new Message();

    message.save({
        'name': name,
        'content':content
    }).then(function(object){
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
        console.log(object)
    })
})






