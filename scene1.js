function scene() {
	
	this.list = [];
	this.addItem = function (item) {
		this.list.push(item);

	};
	
	this.show = function() {
		print(this.list);
		var xs;
		
		for (i = 0; i < this.list.length; i++) {
			xs[i].show();
		}
	};
	
	this.update = function(){

		var item;
		
		for (item in this.list) {
			item.update();
		}
		
	};
}