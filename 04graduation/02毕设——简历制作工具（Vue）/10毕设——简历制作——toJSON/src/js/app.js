let app = new Vue({
    el:'#app',
    data:{
        editingName:false,
        loginVisible:false,
        signUpVisible:false,
        currentUser:{
            id:undefined,
            email:''
        },
        resume:{
            name:'姓名',
            gender:'女',
            birthday:'1990年1月',
            jobTitle:'前端工程师',
            phone:'13811111111',
            email:'example@example.com'
        },
        login:{
            email:'',
            password:''
        },
        signUp:{
            email:'',
            password:''
        }
    },
    methods:{
        onEdit(key,value){
            this.resume[key] = value
        },
        hasLogin(){
            return !!this.currentUser.objectId
        },
        onLogin(e){
            AV.User.logIn(this.login.email,this.login.password).then((user)=>{
                user = user.toJSON()
                this.currentUser.objectId = user.objectId
                this.currentUser.email = user.attributes.email
                this.loginVisible = false
            },(error)=>{
                if(error.code === 211){
                    alert('邮箱不存在')
                }else if(error.code === 210){
                    alert('邮箱和密码不匹配')
                }
            });
        },
        onLogout(e){
            AV.User.logOut();
            alert('注销成功')
            window.location.reload()
        },
        onSignUp(e){
            const user = new AV.User();
            user.setUsername(this.signUp.email)
            user.setPassword(this.signUp.password)
            user.setEmail(this.signUp.email)
            user.signUp().then((user)=>{
                alert('注册成功')
                user = user.toJSON()
                this.currentUser.objectId = user.objectId
                this.currentUser.email = user.email
                this.signUpVisible = false
            },(error)=>{
              alert(error.rawMessage)
            })
        },
        onClickSave(){
            let currentUser = AV.User.current()
            if(!currentUser){
                this.loginVisible = true
            }else{
                this.saveResume()
            }
        },
        saveResume(){
            let {objectId} = AV.User.current().toJSON()
            let user = AV.Object.createWithoutData('user', objectId);
            user.set('resume', this.resume);
            //保存到云端
            user.save().then(()=>{
                alert('保存成功')
            },()=>{
                alert('保存失败')
            })
        },
        getResume(){
            var query = new AV.Query('Todo');
            query.get(this.currentUser.objectId).then((user)=>{
                let resume = user.toJSON().resume
                this.resume = resume
            },(error)=>{
                //异常处理

            })
        }
     }
})

let currentUser = AV.User.current()
if(currentUser){
    app.currentUser = currentUser.toJSON()
    app.getResume()
}



