
function setup() {
	createCanvas (800, 600);
	Scene = new scene();
	var carPos = new p5.Vector(width/2, height/2);
	var carVel = new p5.Vector(0, 0);
	Car = new car(carPos, carVel);
	// Grid = new grid();
		
	// 4 control points of a bezier curve
	var P0 = new p5.Vector(0, 0);
	var P1 = new p5.Vector(0, 0);
	var P2 = new p5.Vector(100, 100);
	var P3 = new p5.Vector(100, 100);
	PathVect = new pathVect(P0, P1, P2, P3);
		
}

function draw() {
	translate(width /2, height / 2);
	background(255);
	noFill();	
	Scene.update(Car, PathVect);
	Scene.show(Car, PathVect);
//	mycar.show();
//	mypathvect.show();
//	mypathvect.update();
			
}