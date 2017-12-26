var pathvect1 = [];
var numberOfPathSegments = 72;
var pathvect1FirstPos = new p5.Vector(-100, 0);

function setup() {
    
	createCanvas (800, 600);
	
	background(0);
	for (var i = 0; i < numberOfPathSegments; i++) {
		pathvect1[i] = new Pathvect(5 + numberOfPathSegments - i, pathvect1FirstPos);
	}
}

function draw() {
  	
	background(255);
    
	translate(width /2, height / 2);
	
	for (var i = 0; i < pathvect1.length; i++){
		if (i === 0){
			pathvect1[i].render(0,0, 0, 0, 0);
		}
			
		else {
			pathvect1[i].render(pathvect1[i-1].posision.x, pathvect1[i-1].posision.y, 0, i * 10, 0);
		}
	}
	
	if (mouseIsPressed){
		for (var i = 0; i < pathvect1.length; i++){
			pathvect1[i].update();
		}	
	}
	
	if (keyIsPressed){
		for (var i = 0; i < pathvects.length; i++){
			pathvects[i].resetVect();
		}	
	}
}

