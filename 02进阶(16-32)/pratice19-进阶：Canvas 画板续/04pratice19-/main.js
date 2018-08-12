var canvas = document.getElementById('xxx');
var context = canvas.getContext('2d');
var lineWidth = 5

// var eraser = document.getElementById('eraser');
// var pen = document.getElementById('pen');

autoSetCanvasSize(canvas);
listenToUser(canvas);

var eraserEnabled = false;
pen.onclick = function(){
    eraserEnabled = false
    pen.classList.add('active')
    eraser.classList.remove('active')
}

eraser.onclick = function(){
    eraserEnabled = true
    eraser.classList.add('active')
    pen.classList.remove('active')
}

clear.onclick = function(){
	context.clearRect(0,0,canvas.width,canvas.height)
}

download.onclick = function(){
	var url = canvas.toDataURL("image/png")
	var a = document.createElement('a')
	a.href = url
	a.download = '我的画儿'
    a.target = '_blank'
	a.click()
}

red.onclick = function(){
    context.fillStyle = 'red'
    context.strokeStyle = 'red'
    red.classList.add('active')
    green.classList.remove('active')
    blue.classList.remove('active')
}

green.onclick = function(){
    context.fillStyle = 'green'
    context.strokeStyle = 'green'
    green.classList.add('active')
    red.classList.remove('active')
    blue.classList.remove('active')
}

blue.onclick = function(){
    context.fillStyle = 'blue'
    context.strokeStyle = 'blue'
    blue.classList.add('active')
    red.classList.remove('active')
    green.classList.remove('active')
}

thin.onclick = function(){
    lineWidth = 5
}

thick.onclick = function(){
	lineWidth = 10
}


function autoSetCanvasSize(canvas){
    setCanvsSize(canvas);

    window.onresize = function(){
        setCanvsSize(canvas);
    }

    function setCanvsSize(canvas){
        var pageWidth = document.documentElement.clientHeight;
        var pageHeight = document.documentElement.clientWidth;
        
        canvas.width = pageWidth
        canvas.height = pageHeight
    }
}

function listenToUser(canvas){
    var using = false;
    var lastPoint = {"x":undefined,"y":undefined};

    //特性检测
    if(document.body.ontouchstart !== undefined){
        //触屏设备
        console.log("触屏设备")
        canvas.ontouchstart = function(aaa){
            var x = aaa.touches[0].clientX;
            var y = aaa.touches[0].clientY;

            using = true;

            if(eraserEnabled){
                context.clearRect(x-5,y-5,10,10);
            } else{
                lastpoint = {"x":x,"y":y};
            }
        }
        canvas.ontouchmove = function(aaa){
            var x = aaa.touches[0].clientX;
            var y = aaa.touches[0].clientY;

            if(using == false){return;}

            if(eraserEnabled){
                context.clearRect(x-5,y-5,10,10);
            } else{
                var newPoint = {"x":x,"y":y}

                //drawCircle(x,y);
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                lastPoint = newPoint;
            }
        }
        canvas.ontouchend = function(a){
            console.log('摸完了')
            using = false
            lastPoint =  {"x":undefined,"y":undefined};
        }
    }else{
        //非触屏设备
        console.log("非触屏设备")
        canvas.onmousedown = function(aaa){
            var x = aaa.clientX;
            var y = aaa.clientY;

            using = true;

            if(eraserEnabled){
                context.clearRect(x-5,y-5,10,10);
            } else{
                lastpoint = {"x":x,"y":y};
            }

            //drawCircle(x,y);
        }

        canvas.onmousemove = function(aaa){
            var x = aaa.clientX;
            var y = aaa.clientY;

            if(using == false){return;}

            if(eraserEnabled){
                context.clearRect(x-5,y-5,10,10);
            } else{
                var newPoint = {"x":x,"y":y}

                //drawCircle(x,y);
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                lastPoint = newPoint;
            }
        }

        canvas.onmouseup = function(){
            using = false;
            lastPoint =  {"x":undefined,"y":undefined};
        }
    }
    
}


//function drawCircle(x,y){
//    context.beginPath();
//    context.fillStyle = 'black';
//    context.arc(x,y,1,0,Math.PI * 2);
//    context.fill();
//}

function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineWidth = lineWidth;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}



//橡皮擦
eraser.onclick = function(){
    eraserEnabled = true;
    actions.className = 'actions x';
}

//画笔
pen.onclick = function(){
    eraserEnabled = false;
    actions.className = 'actions';
}


