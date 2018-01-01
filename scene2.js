function scene(sceneCar, scenePathVect) {
	
	this.show = function ( ) {
		
		this.sceneCar.show();
		this.scenePathVect.show();
	};
	
	this.update = function ( ) {

		this.sceneCar.update();
		this.scenePathVect.update();
	};
}