

var picList;
var currentPic;
var picNum = 8;
var canvasX = 400, canvasY = 400;
var i;
var loopCounter;
var backgroundSpeed = 4;

function preload() {
  picList = [];
  currentPic = 0;
  loopCounter = 0;
  
  
    for (i = 0; i < picNum; i++){
      	picList[i] = loadImage((i + 1) + "PIC.png");
    }
	
	canvasX = windowWidth*.99
	canvasY = windowHeight*.965
}

function setup() {
  	var myCanvas = createCanvas(canvasX, canvasY);
	myCanvas.parent("#canvas");
}

function draw() {
	background(220);

	push();
	picList[currentPic].resize(canvasX, canvasY);
	image(picList[currentPic], 0, 0);
	loopCounter++;
	if (loopCounter >= backgroundSpeed) {
		currentPic++;
		loopCounter = 0;
		if (currentPic >= picNum){
			currentPic = 0;
		}
	}
	pop();
	textSize(0.08 * Math.min(canvasX,canvasY))
	textFont("courier")
	strokeWeight(2)
	stroke(0)
	noFill()
	textAlign(CENTER)
	text("I'm lost in my mind.\nCan you \nHELP\n me?", canvasX / 2, canvasY / 3);	
}