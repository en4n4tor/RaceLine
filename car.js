function car (initPos, initVel) {
	
	this.pos = new p5.Vector(initPos.x, initPos.y);
	this.vel = new p5.Vector(initVel.x, initVel.y);
	this.R = 10;
    this.heading = PI;
    
    this.show = function() {
        //translate(this.pos.x, this.pos.y);
        //rotate(this.heading);
        triangle(-this.R, this.R, this.R, this.R, 0, -this.R);    
    
    };
	
    this.turn = function(angle){
        this.heading += 10;
    };

	this.update = function () {
		
	};

	
}