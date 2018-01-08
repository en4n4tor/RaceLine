function pathVect(init_p0, init_p1, init_p2, init_p3){
	
	this.p0 = new p5.Vector(init_p0.x,init_p0.y);
	this.p1 = new p5.Vector(init_p1.x,init_p1.y);
	this.p2 = new p5.Vector(init_p2.x,init_p2.y);
	this.p3 = new p5.Vector(init_p3.x,init_p3.y);
	
	this.update = function (mousepress) {
		
		this.p3.set(mouseX-width/2, mouseY-height/2);
		//this.p1.set(carVel.x, carVel.y);
	};
	
	this.show = function () {
		
		noFill();
		stroke('blue');
		bezier	(
				this.p0.x, 		this.p0.y, 
				this.p1.x, 		this.p1.y, 
				this.p2.x, 		this.p2.y, 
				this.p3.x, 		this.p3.y
				);
		fill(255);
		steps = 10;
				
	};
	
}