function Vector3D(elements) {
	var THIS = this;
	
	if (elements.length !== 3) throw new Error('Vector3D must have 3 elements');

	try {
		for (var i = 0; i < 3; i++) {
			this[i] = elements[i];
		}
	} catch (e) {
		throw new Error('Undefined Error');
	}
	
	this.vertex = function(){
		return new Vertex3D(THIS[0], THIS[1], THIS[2]);
	}

}
