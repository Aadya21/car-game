//Create a reference for canvas 
canvas = document.getElementById('canvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
greenCar_width = "75";
greenCar_height = "100";


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greenCar_x = 5;
greenCar_y = 225;
function add() {
	//upload cbackgar, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onlode = uploadBackground;
	background_imgTag.src = background_image;


	greencar_imgTag = new Image();
	greenCar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src =greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
 ctx.drawImage(background_imgTag, 0,0,  canvas.width, canvas.height);
 
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
 ctx.drawimage(greencar_imgTag, green_x,greencar_y,greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar-y  >=0)
	{
		greencar_y = greencar_y = 10;
		console.log("when up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
