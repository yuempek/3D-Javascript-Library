function Scene3D(){

	var THIS = this;
	
	var add_polygon = function(polygon){
		THIS.elements.push(polygon);
	}	

	var add_label = function(label){
		THIS.elements.push(label);
	}	

	this.elements = [];
	
	this.add = function(element){
		if (element instanceof Polygon3D){
			add_polygon(element);
			return;
		}
		if (element instanceof Label3D){
			add_label(element);
			return;
		}
		
	}
}

