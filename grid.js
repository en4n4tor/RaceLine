function grid() {

	this.show = function() {
		
		var cx = 80, cy = 60;
		var x = -1 * width/2, y = -1 * height/2;
		var dx = width / cx, dy = height / cy;
	
		for (i = 0; i < cx + 1; i++) {
		
			stroke('black');
			line(x + i * dx, y, x + i * dx, y + height);
			// verticle lines...
		}

		for (j = 0; j < cy; j++) {
		
			stroke('grey');
			line (x, y + j * dy, x + width, y + j * dy);
			// horizontal lines...
		}	
	}
}

