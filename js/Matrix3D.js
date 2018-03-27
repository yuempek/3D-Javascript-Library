function Matrix3D(elements){
	var THIS = this;
	
	if ((elements.length !== 3) && (elements[0].length !== 3)) throw new Error('Matrix3D must be 3x3 matrix');
	
	try {
		for (var i = 0; i < 3; i++) {
			this[i] = [];
			for (var j = 0; j < 3; j++) {
				this[i][j] = elements[i][j];
			}
		}
	} catch (e) {
		throw new Error('Matrix3D must be 3x3 matrix');
	}
	
	this.multiply = function(x) {
		if (x instanceof Vector3D) { 
			return THIS.mat_multiply_vec(x);
		} 
		
		if (x instanceof Matrix3D) {
			return THIS.mat_multiply_mat(x);
		}
		
		throw new Error('instance must be either a Vector3D or Matrix3D');
	}
	
	this.mat_multiply_mat = function(mat) {
		
		var elements = [];
		
		for (var i = 0; i < 3; i++) {
			elements[i] = [];
			for (var j = 0; j < 3; j++) {
				elements[i][j] = THIS[i][0] * mat[0][j] + THIS[i][1] * mat[1][j] + THIS[i][2] * mat[2][j];
			}
		}
		
		return new Matrix3D(elements);	
	}
	
	this.mat_multiply_vec = function(vec) {
		
		var elements = [];
		
		for (var i = 0; i < 3; i++) {
			elements[i] = THIS[i][0] * vec[0] + THIS[i][1] * vec[1] + THIS[i][2] * vec[2];
		}

		return new Vector3D(elements);
	}
	
	this.transpose = function() {
		var mat = [];

		for (var i = 0; i < 3; i++) {
			mat[i] = [];
			for (var j = 0; j < 3; j++) {
				mat[i][j] = THIS[j][i];
			}
		}
		
		return new Matrix3D(mat);
	}
}

Matrix3D.multiply = function(A, B, C) {
	
	if(!C) return A.multiply(B);
	
	return A.multiply(B.multiply(C));
}

Matrix3D.identity = function() {
	return new Matrix3D([
		[1.0, 0.0, 0.0],
		[0.0, 1.0, 0.0],
		[0.0, 0.0, 1.0]
	]);
}

Matrix3D.rotationX = function(angle) {
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	return new Matrix3D([
		[1.0, 0.0, 0.0],
		[0.0,   c,  -s],
		[0.0,   s,   c],
	]);
};

Matrix3D.rotationY = function(angle) {
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	return new Matrix3D([
		[  c, 0.0,  -s],
		[0.0, 1.0, 0.0],
		[  s, 0.0,   c],
	]);
};


Matrix3D.rotationZ = function(angle) {
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	return new Matrix3D([
		[  c,  -s, 0.0],
		[  s,   c, 0.0],
		[0.0, 0.0, 1.0],
	]);
};

Matrix3D.isometric = function(angle) {
	var c = Math.cos(angle);
	var s = Math.sin(angle);
	return new Matrix3D([
		[  c, 0.0,   c],
		[ -s, 1.0,   s],
		[0.0, 0.0, 0.0]
	]);
};
