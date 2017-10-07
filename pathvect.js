function Pathvect(mass, oldpos) {
	this.posision = new p5.Vector(oldpos.x, oldpos.y);
	this.velocity = new p5.Vector(oldpos.x, oldpos.y);
	this.acceleration = new p5.Vector(oldpos.x, oldpos.y);
	this.mousevect = new p5.Vector(mouseX, mouseY);
	this.newpos = new p5.Vector(oldpos.x, oldpos.y);
	this.oldpos = new p5.Vector(oldpos.x, oldpos.y);
	this.oldpos.set(oldpos);
	this.mass = mass;
	this.maxdist = 10;
	this.vectHeading = new p5.Vector(oldpos.x, oldpos.y)
//updates the vector posisions
this.update = function(){
	this.vectHeading.set(this.velocity);
	this.vectHeading.normalize();
	this.newpos.set(this.posision.x, this.posision.y);
	this.mousevect.set(mouseX - width/2, mouseY - height/2);
	this.mousevect.sub(this.newpos);
	this.applyForce(this.mousevect);
	this.velocity.add(this.acceleration);
	this.velocity.mult(.1);
	print(this.velocity.heading())
	
	if (this.posision.dist(this.oldpos) > this.maxdist){
		this.posision.set(this.oldpos.add(this.vectHeading.mult(this.maxdist)));
		this.velocity.mult(.5);	
	} 
	
	this.posision.add(this.velocity);
	this.acceleration.mult(0);
		
}
//used in update function to change velocity vector
this.applyForce = function(force){
	this.f = force.copy();
	this.f.div(this.mass);
	this.acceleration.add(this.f);
}
//draws a representation of posision vector on canvas
this.render = function(x, y, vx, vy, r, g, b) {
    //translate(width /2, height / 2);
	//rotate(PI)
	
	stroke(r, g, b);
	this.oldpos.set(x,y);
	bezier(this.oldpos.x, this.oldpos.y, vx, vy, this.posision.x, this.posision.y, this.velocity.x, thit.velocity.y);
			
		//fill(100);
		//translate(this.mousevect.x, this.mousevect.y);
       	//triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
}
//resets vectors, called by whenKeyIsPressed in sketch 
this.resetVect = function(){
	this.acceleration.mult(0);
	this.posision.mult(0);
	this.velocity.mult(0);
}
}
	