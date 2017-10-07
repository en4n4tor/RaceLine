var numberOfPathSegments = 45;
var pathvect1 = [];
var pathvect2 = [];
var pathvect1FirstPos = new p5.Vector(-100, 0);
var pathvect2FirstPos = new p5.Vector(100, 0);


function setup() {
    
	createCanvas (800, 600);
	
	background(0);
	//fill out pathvect1[] 
	for (var i = 0; i < numberOfPathSegments; i++) {
		pathvect1[i] = new Pathvect(5 + numberOfPathSegments - i, pathvect1FirstPos);
	}
	//fill out pathvect2[] 
	for (var i = 0; i < numberOfPathSegments; i++) {
		pathvect2[i] = new Pathvect(5 + numberOfPathSegments - i, pathvect2FirstPos);
	}
		
}

function draw() {
  	
	background(255);
    
	translate(width /2, height / 2);
	
	for (var i = 0; i < pathvect1.length; i++){
		if (i === 0){
			pathvect1[i].render(0,0, 0, 0, 0, 0, 0);
		}
			
		else {
			pathvect1[i].render(pathvect1[i-1].posision.x, pathvect1[i-1].posision.y, pathvect1[i-1].velocity.x, pathvect1[i-1].velocity.y, 0, i * 10, 0);
		}
	}
	
	for (var i = 0; i < pathvect2.length; i++){
		if (i === 0){
		pathvect2[i].render(20,-10, 0, 0, 0, 0, 0);	
		}
		
		else {
			pathvect2[i].render(pathvect2[i-1].posision.x, pathvect2[i-1].posision.y, 0, 0, 0, 0, i * 10);
		}
	}
	
	if (mouseIsPressed){ //update pos of all pathvects
		
		//pathvect1 update
		for (var i = 0; i < pathvect1.length; i++){
			pathvect1[i].update();
		}	
		
		//pathvect1 update
		for (var i = 0; i < pathvect2.length; i++){
			pathvect2[i].update();
		}	
	}
	
	if (keyIsPressed){
		
		for (var i = 0; i < pathvect1.length; i++){
			pathvect1[i].resetVect();
		}	
		
		for (var i = 0; i < pathvect2.length; i++){
			pathvect2[i].resetVect();
		}	
	}
}

