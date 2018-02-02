!function(){
    var view = document.querySelector('section.message')

    var controller = {
        view:null,
        init:function(view){
            this.view = view
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        initAV:function(){
            //初始化
            var APP_ID = 'FqPJXxCv1gabu5JMeHrved6l-gzGzoHsz';
            var APP_KEY = 'Eevd4W01afMxVUg9s2pDDTr4';

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        loadMessages:function(){
            var query = new AV.Query('Message4');
            query.find()
                .then(
                    (messages) => {
                        let array = messages.map((item)=> item.attributes)
                        array.forEach((item)=>{
                            let li = document.createElement('li')
                            li.innerText = `${item.name}: ${item.content}`
                            this.messageList.appendChild(li)
                        })
                    }
                )
        },
        bindEvents:function(){
            let myForm = this.form

            myForm.addEventListener('submit',function(e){
                console.log(e)
                e.preventDefault()
                let name = myForm.querySelector('input[name=name]').value
                let content = myForm.querySelector('input[name=content]').value

                var Message = AV.Object.extend('Message4');
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
        }
    }
    controller.init(view)
}.call()







