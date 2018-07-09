/**
 * Created by Administrator on 2018/2/3 0003.
 */

//如何调用
//var model = Model({
//    resourceName:'表名'
//})

window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init:function(){
            var APP_ID = 'FqPJXxCv1gabu5JMeHrved6l-gzGzoHsz';
            var APP_KEY = 'Eevd4W01afMxVUg9s2pDDTr4';
            AV.init({appId: APP_ID, appKey: APP_KEY})
        },
        fetch:function(){
            var query = new AV.Query(resourceName);  //这里使用了闭包,调用了函数外的变量
            return query.find()  //Promise对象
        },
        save:function(object){
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}


