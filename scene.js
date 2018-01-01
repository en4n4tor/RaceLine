function scene() {
	let carPos = new p5.Vector(width/2, height/2);
	let carVel = new p5.Vector(0, 0);
	let mycar = new car(carPos, carVel);
	
	// 4 control points of a bezier curve
	let P0 = new p5.Vector(0, 0);
	let P1 = new p5.Vector(carVel.x, carVel.y);
	let P2 = new p5.Vector(200, 100);
	let P3 = new p5.Vector(100, 200);
	let mypathvect = new pathVect(P0, P1, P2, P3);
	
	this.objectList = [];
	this.addObject = function (object) {
		this.objectList.append(object);
	};
	
	this.show = function() {
		mycar.show();
		mypathvect.show();

		// for object in this.objectList {
		//	object.show();
		// }
	};
	
	this.update = function(){
		mycar.update();
		mypathvect.update();
		
	};
}