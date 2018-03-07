let app = new Vue({
    el:'#app',
    data:{
        editingName:false,
        loginVisible:false,
        signUpVisible:false,
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
        onLogin(e){
            AV.User.logIn(this.login.email,this.login.password).then(function(user){
                console.log(user)
            },function(error){
                if(error.code === 211){
                    alert('邮箱不存在')
                }else if(error.code === 210){
                    alert('邮箱和密码不匹配')
                }
            });
        },
        onSignUp(e){
            const user = new AV.User();
            user.setUsername(this.signUp.email)
            user.setPassword(this.signUp.password)
            user.setEmail(this.signUp.email)
            user.signUp().then(function(user){
                console.log(user)
            },function(error){

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
            let {id} = AV.User.current()
            var user = AV.Object.createWithoutData('user', id);
            user.set('resume', this.resume);
            //保存到云端
            user.save();
        }
    }
})