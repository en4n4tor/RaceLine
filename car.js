function RaceCar() {
    
	this.pos = createVector(width /2, height / 2);
    this.r = 10;
    this.heading = PI;
    
    this.render = function() {
        translate(this.pos.x, this.pos.y);
        rotate(this.heading);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r);    
    
    }        
   this.turn = function(angle){
        this.heading += angle;
    }
          
}