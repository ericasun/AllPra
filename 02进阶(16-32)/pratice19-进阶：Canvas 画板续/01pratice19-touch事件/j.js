var canvas = document.getElementById('xxx');
var context = canvas.getContext('2d');
var eraser = document.getElementById('eraser');


autoSetCanvasSize(canvas);
listenToUser(canvas);

var eraserEnabled = false;

function autoSetCanvasSize(canvas){
    setCanvsSize(canvas);
    window.onresize = function(){
        setCanvsSize(canvas);
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
    context.strokeStyle = "black";
    context.moveTo(x1,y1);
    context.lineWidth = 2;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}

function setCanvsSize(canvas){
    canvas.height = document.documentElement.clientHeight;
    canvas.width = document.documentElement.clientWidth;
}

//橡皮擦
eraser.onclick = function(){
    eraserEnabled = true;
    actions.className = 'actions x';
}

//画笔
brush.onclick = function(){
    eraserEnabled = false;
    actions.className = 'actions';
}

