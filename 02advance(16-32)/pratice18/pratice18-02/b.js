/**
 * Created by Administrator on 2017/11/23 0023.
 */
var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');

//填充
context.fillStyle = 'red';
context.fillRect(10,12,300,300);

//描边
context.strokeStyle = "yellow";
context.strokeRect(20,30,200,200);

context.clearRect(50,50,50,50);

//填充
context.beginPath();
context.moveTo(5,5);
context.lineTo(10,10);
context.lineTo(0,10);
context.fillStyle = 'green';
context.fill();

//画圆
context.beginPath();
context.arc(150,150,80,0,Math.PI * 2);
context.fillStyle = 'black';
context.fill();



