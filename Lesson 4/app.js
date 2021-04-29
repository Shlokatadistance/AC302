console.log("testing ......")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var bw = new Image();
var capt = new Image();
var im = new Image();
var hawkeye = new Image();
var thor = new Image();
var hulk = new Image();



bw.src = "black_widow.png";
capt.src = "captain_america.png";
im.src = "iron_man.png";
hawkeye.src = "hawk.png";
thor.src = "thor_1.png";
hulk.src = "hulk_1.png";


bw.onload = function(){
	ctx.drawImage(bw,650,200,150,200);
};

im.onload = function(){
	ctx.drawImage(im,470,110,200,200);
};

ctx.fillStyle = "sandybrown";
ctx.fillRect(0,380,800,150);
ctx.fillStyle = "midnightblue";
ctx.fillRect(0,0,800,380);

ctx.beginPath();
ctx.arc(100,100,50,0,6.28);
ctx.closePath();
ctx.fillStyle = "ivory";
ctx.fill();

ctx.font = "55px Bangers";
ctx.fillStyle = "ivory";
ctx.fillText("Avengers Assemble !",210,80);

ctx.font = "55px sa"











