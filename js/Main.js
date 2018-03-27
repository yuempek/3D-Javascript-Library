(function (){
	
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	canvas.width = 800;
	canvas.height = 600;

	context.translate(canvas.width / 2, canvas.height / 2); // 0 should be in the centre
	context.strokeStyle = '#222222';
	
	
	var X, Y, Z; 
	var ctrlKey, shiftKey, altKey;
	
	var move = function(e) {
		e.preventDefault();

		if (!X || !Y) {
			X = e.pageX;
			Y = e.pageY;
			return;
		}
		
		camBearing += X - e.pageX;
		camElevation += Y - e.pageY;
			
		X = e.pageX;
		Y = e.pageY;
		
	};
	
	var wheel = function(e) {
		e.preventDefault();

		if(e.ctrlKey) {
			yaw -= e.deltaY/100;
			console.log("yaw: " + yaw);
			return;
		}
		
		
		if(e.shiftKey) {
			pitch -= e.deltaY/100;
			console.log("pitch: " + pitch);
			return;
		}
		
		
		if(e.altKey) {
			roll -= e.deltaY/100;
			console.log("roll: " + roll);
			return;
		}
		
		camera.distance += e.deltaY/10;
		console.log("camera.distance: " + camera.distance);
			
	};
	


	document.addEventListener('mousemove', move);
	document.addEventListener('touchmove', move);
	document.addEventListener('wheel', wheel);
	
	
	
	
	var scene = new Scene3D();
	
	scene.add(floor);
	
	scene.add(xaxis);
	scene.add(yaxis);
	scene.add(zaxis);

	scene.add(xlabel);
	scene.add(ylabel);
	scene.add(zlabel);
	
	scene.add(airplaneLeftWing);
	scene.add(airplaneLeftBody);          
	scene.add(airplaneRightBody); 
	scene.add(airplaneRightWing);
	

	
	
	var roll         = 0;
	var pitch        = 0;
	var yaw          = 0;
	var camElevation = -90;
	var camBearing   = 180;

	var camera = new Camera3D();
	var transform = Matrix3D.identity();
	camera.distance = 500;
	
	
	var transformation = function(){
		
		roll         += 0;
		pitch        += 0;
		yaw          += 0;
		camElevation += 0;
		camBearing   += 0;
		
		context.fillStyle = 'rgba(255,255,255, 1)'; // or 'transparent'
		context.fillRect(- canvas.width / 2, - canvas.height / 2, canvas.width, canvas.height);
		
		var Rx = Matrix3D.rotationX(pitch * Math.PI / 180);
		var Ry = Matrix3D.rotationY(roll  * Math.PI / 180).transpose();
		var Rz = Matrix3D.rotationZ(yaw   * Math.PI / 180).transpose();
		transform = Matrix3D.multiply(Rz, Rx, Ry);
		
		
		var Rx = Matrix3D.rotationX(camElevation * Math.PI / 180);
		var Ry = Matrix3D.rotationY(camBearing * Math.PI / 180).transpose();
		var Rz = Matrix3D.rotationZ(0 * Math.PI / 180);
		camera.transform = Matrix3D.multiply(Ry, Rx, Rz);
		
		for (var i = 0; i < airplaneModel.polygons.length; i++) {
			airplaneModel.polygons[i].transform = transform;
		}
		
	};
	
	
	var renderer = new Renderer3D(context, scene, camera);
	
	Animation.addCallback(transformation);
	Animation.addCallback(renderer.render);
	Animation.start();
	

})();
