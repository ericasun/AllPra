/**
 * Created by Administrator on 2018/2/4 0004.
 */


function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}


/*把code写到#code和style标签里*/
function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code')
    //domCode.innerHTML = prefix || ''
    var n = 0
    var id = setInterval(()=>{
        n += 1
        domCode.innerHTML = Prism.highlight( prefix + code.substring(0,n),Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0,n)
        domCode.scrollTop = domCode.scrollHeight;
        if(n>=code.length){
            window.clearInterval(id)
            fn && fn.call()
        }
    },0)
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    var id = setInterval(()=>{
        n += 1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight;
        if(n >= markdown.length){
            window.clearInterval(id)
            fn && fn.call()
        }
    },70)
}

function convertMarkdownToHtml(fn){
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
}


var result = `/*
*面试官你好，我是xxx
*我将以动画的形式来介绍我自己
*只用文字介绍太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/

*{
    transition:all 1s;
}
html{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    border:1px solid red;
    padding:16px;
}

/*我需要一点代码高亮*/

.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}
.token.function{
    color:red;
}

/*加点3D效果*/
#code{
    transform:rotate(360deg);
}

/*不玩了，我来介绍一下我自己吧*/
/*我需要一张白纸*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}

#paper > .content{
    background:white;
    height:100%;
    width:100%;
}
`

var result2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`

var md = `
#自我介绍

我叫XXX
1999年1月出生
XXX学校毕业
自觉前端半年
希望应聘前端开发岗位

#技能介绍
熟悉JavaScript CSS

#项目介绍
1.XXX轮播
2.XXX简历
3.XXX画板

#联系方式
QQ：XXXX
Email:XXXX
手机：XXXXX
`
let result3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`


writeCode('',result,()=>{ //writeCode call the function
    createPaper(()=>{
        writeMarkdown(md,()=>{
            writeCode(result,result2,()=>{
                convertMarkdownToHtml(()=>{
                    writeCode(result + result2, result3, ()=> {
                        console.log('完成')
                    })
                })
            })
        })
    })
})
