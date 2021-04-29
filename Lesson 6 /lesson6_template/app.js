// Declaring all variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Width and height of canvas
var width = canvas.width;
var height = canvas.height;
// position and radius of player
var x = width/2;
var y = height/2;
var s = 50;
// Player speed in x-y directions
var dx = 0;
var dy = 0;

// Positions, size  of circle
var circleX ;
var circleY ;
var circleS = 50;

//Variable for the score
var score = 0;





// randomize circle position
function randCirclePos(){

}




// Import images onto canvas
function drawPacman(){
	var pacman = new Image();
	pacman.src = "pacman.png";
	ctx.drawImage(pacman,x,y,s,s);

}


function drawCircle(){
	var circle = new Image();
	circle.src = "circle.png";
	ctx.drawImage(circle,circleX,circleY,circleS,circleS);


}


function updatePlayer(){
	// Make player bounce off the walls and go in the opposite direction
	if (x + dx > width - s || x + dx < 0){
		dx = -dx;
	} else if (y + dy > width - s || y + dy < 0) {
		dy = -dy;
	}

	// Moves our player
	x += dx;  
	y += dy;
}





// Wiping canvas
function clear () {
	ctx.clearRect(0, 0, width, height);
}





//Function to handle the keypresses
function keydownHandler(e){
	// Change the direction depending on which button is pressed

	if (e.keyCode == 37){
		dx = -4;
		dy = 0

	} else if(e.keyCode == 38){
		dx = 0;
		dy = -4;
	} else if (e.keyCode == 39){
		dx = 4;
		dy = 0;
	} else if (e.keyCode == 40){
		dx = 0;
		dy = 4;
	}
}


// Initialise our animation
function init() {
	// Put circle in random position
	circleX = Math.floor(Math.random() * (width-circleS));
	circleY = Math.floor(Math.random() * (height-circleS));

	window.onkeydown = keydownHandler;
	return setInterval(draw,10);
	

	// Wait for user to press keyboard 


}

// Repeated draw function
function draw() {
	clear();
	drawPacman();
	drawCircle();


	if (x + dx > width - s || x +dx < 0){
		dx = -dx;
	} else if (y + dy > height - s || y + dy < 0){
		dy = -dy;
	}

	//update player position

	x += dx;
	y += dy;



	//draw images

	checkCollision();
	circleCollisionHandle();


	// Check for collisions
	

}






//Function to check for collisions
function checkCollision(){
	if ((x + s >= circleX) && (x <= circleX + circleS) && (y + s >= circleY) && (y <= circleY + circleS)){
		circleCollision = true;
	} else{
		circleCollision = false;
	}





}

//Function to handle the collision
function circleCollisionHandle(){
	if (circleCollision){
		circleX = Math.floor(Math.random() * (width-circleS));
		circleY = Math.floor(Math.random() * (height-circleS));
		score += 1;
		document.getElementById("score").innerHTML = score;
	}

}





init();
setInterval(draw, 10);