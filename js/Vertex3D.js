function Vertex3D(x, y, z) {
	
	var THIS = this;
	
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.vector = function() {
		return new Vector3D([THIS.x, THIS.y, THIS.z]);
	};
}
