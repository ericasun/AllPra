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
        let string = fs.readFileSync('./index.html')
        response.statusCode = 200
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path === '/sign_up' && method === 'GET'){
        let string = fs.readFileSync('./sign_up.html','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path === '/sign_up' && method === 'POST'){
        readBody(request).then((body)=>{
            let strings = body.split('&')
            let hash = {}
            strings.forEach((string)=>{
                let parts = string.split('=')
                let key = parts[0]
                let value = parts[1]
                hash[key] = value
            })
            //let email = hash['email']
            //let password = hash['password']
            //let password_confirmation = hash['password_confirmation']

            //和上面三行等价
            let {email,password,password_confirmation} = hash
            if(email.indexOf('@') === -1){
                response.statusCode = 400
                response.write('email is bad')
            }else if(password !== password_confirmation){
                repsonse.statusCode = 400
                response.write('password not match')
            }else{
                response.statusCode = 200
            }
            response.end()
        })
    }else if(path ==='/main.js'){
        let string = fs.readFileSync('./main.js','utf-8')
        response.statusCode = 200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        response.write(string)
        response.end()
    }else if(path='/xxx'){
        response.statusCode = 200
        response.setHeader('Content-Type','text/xml')
        response.setHeader('Access-Control-Allow-Origin','*')
        //符合JSON语法的字符串
        response.write(`
            {
                "note":{
                    "to":"小谷",
                    "from":"方方",
                    "heading":"打招呼",
                    "content":"hi"
                }
            }
        `)
        response.end()
    }else{
        response.statusCode = 404
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write('呜呜呜')
        response.end()
    }

    //代码结束，下面不要看
    console.log(method+''+request.url)
})

function readBody(request){
    return new Promise((resolve,reject)=>{
        let body = []
        request.on('data',(chunk)=>{
            body.push(chunk);
        }).on('end',()=> {
            body = Buffer.concat(body).toString();
            resolve(body)
        })
    })
}

server.listen(port)
console.log('监听' + port + '成功\n请用在空中转体720度然后用电饭煲打开\nhttp:localhost:'+port)