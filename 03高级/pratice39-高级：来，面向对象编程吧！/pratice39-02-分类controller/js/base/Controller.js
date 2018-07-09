/**
 * Created by Administrator on 2018/2/3 0003.
 */

//如何调用
//Controller({
//    init:(view,model){
//        this.xxx()
//        this.yyy()
//    },
//    xxx(){}
//    yyy(){}
//})

window.Controller = function(options){
    var init = options.init //A

    let object = {
        view:null,
        model:null,
        init:function(view,model){
            this.view = view
            this.model = model
            this.model.init()
            init.call(this,view,model) //这个init是A处的init
            this.bindEvents.call(this)
        }
    }

    for(let key in options){
        if(key !== 'init'){
            object[key] = options[key]
        }
    }
    return object
}

