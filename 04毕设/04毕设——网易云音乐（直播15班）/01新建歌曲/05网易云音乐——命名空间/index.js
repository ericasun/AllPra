var http = require('http')
var fs = require('fs')
var url = require('url')

var port = process.env.PORT || 8888;

var server = http.createServer(function(request,response){
    var temp = url.parse(request.url,true)
    var path = temp.pathname
    var query = temp.query
    var method = request.method

    //从这里开始看，上面不要看

    if(path === '/'){ //如果用户请求的是/路径
        let string = fs.readFileSync('./src/admin.html')
        response.statusCode = 200
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/node_modules/leancloud-storage/dist/av-min.js'){
        let string = fs.readFileSync('./node_modules/leancloud-storage/dist/av-min.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/node_modules/leancloud-storage/dist/av-min.js/av-min.js.map'){
        let string = fs.readFileSync('./node_modules/leancloud-storage/dist/av-min.js/av-min.js.map')
        response.statusCode = 200
        response.setHeader('Content-Type','charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/node_modules/qiniu-js/dist/qiniu.min.js'){
        let string = fs.readFileSync('./node_modules/qiniu-js/dist/qiniu.min.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/node_modules/qiniu-js/dist/qiniu-min.js/qiniu-min.js.map'){
        let string = fs.readFileSync('./node_modules/qiniu-js/dist/qiniu-min.js/qiniu-min.js.map')
        response.statusCode = 200
        response.setHeader('Content-Type','charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/node_modules/plupload/js/plupload.min.js'){
        let string = fs.readFileSync('./node_modules/plupload/js/plupload.min.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/songs.json'){
        let string = fs.readFileSync('./songs.json','utf-8')
        string = JSON.stringify(string)
        response.statusCode = 200
        //传JSON文件最好不要写响应类型，以防格式不对造成传输失败，实在要写的话要先转换成JSON
        response.setHeader('Content-Type','text/json;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/images/loading.gif'){
        let string = fs.readFileSync('./images/loading.gif')
        response.statusCode = 200
        response.setHeader('Content-Type','image/gif')
        response.write(string)
        response.end()
    }else if(path ==='/page2.json'){
        let string = fs.readFileSync('./page2.json','utf-8')
        string = JSON.stringify(string)
        response.statusCode = 200
        //传JSON文件最好不要写响应类型，以防格式不对造成传输失败，实在要写的话要先转换成JSON
        response.setHeader('Content-Type','text/json;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/page3.json'){
        let string = fs.readFileSync('./page3.json','utf-8')
        string = JSON.stringify(string)
        response.statusCode = 200
        //传JSON文件最好不要写响应类型，以防格式不对造成传输失败，实在要写的话要先转换成JSON
        response.setHeader('Content-Type','text/json;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/vendors/moxie.js'){
        let string = fs.readFileSync('./vendors/moxie.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/css/default.css'){
        let string = fs.readFileSync('./src/css/default.css','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/css;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/js/new-song.js'){
        let string = fs.readFileSync('./src/js/new-song.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/js/song-form.js'){
        let string = fs.readFileSync('./src/js/song-form.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/js/song-list.js'){
        let string = fs.readFileSync('./src/js/song-list.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/js/upload-song.js'){
        let string = fs.readFileSync('./src/js/upload-song.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path ==='/js/app.js'){
        let string = fs.readFileSync('./src/js/app.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else{
        response.statusCode = 404
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write('失败')
        response.end()
    }

    //代码结束，下面不要看
    console.log(method+''+request.url)
})

server.listen(port)
console.log('监听' + port + '成功\n请用在空中转体720度然后用电饭煲打开\nhttp:localhost:'+port)