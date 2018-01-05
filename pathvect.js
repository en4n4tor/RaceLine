function Pathvect(mass, oldpos) {
	this.mousevect 		= new p5.Vector(mouseX, mouseY);
	this.oldpos 		= new p5.Vector(oldpos.x, oldpos.y);
	this.vectHeading 	= new p5.Vector(0, 0);
	this.posision		= new p5.Vector(0, 0);
	this.velocity 		= new p5.Vector(0, 0);
	this.controlPoint1 	= new p5.Vector(0, 0);
    this.controlPoint2 	= new p5.Vector(0, 0);
    this.acceleration 	= new p5.Vector(0, 0);
	this.newpos 		= new p5.Vector(0, 0);
	//this.oldpos.set(oldpos);
	this.mass = mass;
	this.maxdist = 10;
	

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
this.render = function(x, y, r, g, b) {
    this.oldpos.set(x, y);
    this.controlPoint1.set(this.vectHeading.x, this.vectHeading.y);
    this.controlPoint1.mult(this.oldpos.dist(this.posision));
    
    this.controlPoint2.set(this.posision.x, this.posision.y);
    this.controlPoint2.sub(this.controlPoint1);
    this.controlPoint1.sub(this.oldpos.copy());
	
    stroke(100, g, b);
    line(	
				this.posision.x, 		this.posision.y, 
		 		this.controlPoint2.x, 	this.controlPoint2.y
		);
    
    stroke(r, 200, b);
    line(	
				this.oldpos.x, 			this.oldpos.y, 
		 		this.controlPoint1.x, 	this.controlPoint1.y
		);
          
    stroke(200, g, 150);
    bezier(		
				this.oldpos.x, 			this.oldpos.y,
				this.controlPoint1.x, 	this.controlPoint1.y, 
		   		this.controlPoint2.x, 	this.controlPoint2.y,
				this.posision.x, 		this.posision.y
		  );
    
			
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
	