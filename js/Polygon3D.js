function Polygon3D(vertices, color) {

	var THIS = this;
	
	this.vertices = [];
	this.color = color;
	this.transform = Matrix3D.identity(); 
	
	this.add = function(vertex){
		if (!(vertex instanceof Vertex3D)) throw new Error('vertex must be Vertex3D');
		
		THIS.vertices.push(vertex);
	}
	
	this.transformedVertices = function(){
		var vertices = [];
		
		for(var i = 0; i < THIS.vertices.length; i++){
			vertices[i] = Matrix3D.multiply(THIS.transform, THIS.vertices[i].vector()).vertex();
		}
		
		return vertices;
	}
	
	try {
		for (var i = 0; i < vertices.length; i++) {
			this.add(vertices[i]);
		}
	} catch (e) {
		throw new Error('vertices must be Vertex3D array');
	}

}
