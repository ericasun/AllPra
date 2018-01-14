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
        var string = fs.readFileSync('./index.html','utf8')
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path === '/style.css'){
        var string = fs.readFileSync('./style.css','utf8')
        response.setHeader('Content-Type','text/css')
        response.write(string)
        response.end()
    }else if(path === '/main.js'){
        var string = fs.readFileSync('./main.js','utf8')
        response.setHeader('Content-Type','application/javascript')
        response.write(string)
        response.end()
    }else{
        response.statusCode = 404
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write('找不到对应的路径，你需要自行修改index.js')
        response.end()
    }

    //代码结束，下面不要看
    console.log(method+''+request.url)
})

server.listen(port)
console.log('监听' + port + '成功\n请用在空中转体720度然后用电饭煲打开\nhttp:localhost:'+port)