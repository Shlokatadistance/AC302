console.log("testing ......")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;




ctx.stroke();


ctx.fillStyle = 'rgb(200,50,10)';
ctx.fillRect(75,125,150,100);

ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);

ctx.clearRect(125,150,50,50);


var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");

ctx1.fillStyle = 'rgb(0,100,100)';
ctx1.fillRect(0,0,150,150);
ctx1.fillRect(150,150,150,150);