!function(){

    var model = Model({resourceName:'Message'})
    var view =  View('section.message')

    var controller = {
        view:null,
        model:null,
        messageList:null,
        init:function(view,model){
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        //加载Message
        loadMessages:function() {
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item)=> item.attributes)
                    array.forEach((item)=> {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}: ${item.content}`
                        this.messageList.appendChild(li)
                    })
                }
            )
        },
        //绑定事件
        bindEvents:function(){
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function(){
            let myForm = this.form
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value

            this.model.save({'name':name,'content':content})
                .then(function(object){
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
            })
        }
    }
    controller.init(view, model)
}.call()