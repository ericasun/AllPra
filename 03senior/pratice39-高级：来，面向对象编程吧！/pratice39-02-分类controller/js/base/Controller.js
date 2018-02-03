/**
 * Created by Administrator on 2018/2/3 0003.
 */

window.Controller = function(options){
    var init = options.init
    this.bindEvents = options.bindEvents

    return {
        view:null,
        model:null,
        init:function(view,model){
            this.view = view
            this.model = model
            this.model.init()
            this.bindEvents()
            init.call(this,view,model)
        }
    }
}

