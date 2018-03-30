function Renderer3D(context, scene, camera){
	var THIS = this;
	
	this.scene = scene;
	this.context = context;
	this.camera = camera;
	
	this.render = function(){
		THIS.context.save();
		drawScene(THIS.scene);
		THIS.context.restore();
	}
	
	var sortElements = function(elements){
		
		for(var i = 0; i < elements.length; i++){
			if (elements[i] instanceof Polygon3D) { 
				
				var vertices = elements[i].transformedVertices();
		
				elements[i].zorder = 0;
				
				for(var j = 0; j < vertices.length; j++){
					var v = transformCamera(vertices[j]);
					if(v) elements[i].zorder += v.z;
				}
				
				// average z
				elements[i].zorder /= vertices.length;
				
				continue;
			}
			
			if (elements[i] instanceof Label3D) { 
				
				var v = transformCamera(elements[i].vertex);
				
				elements[i].zorder = v.z;
				
				continue;
			}
		}
		
		elements.sort(function(a, b){return b.zorder - a.zorder;});
		
		return elements;
	}
	
	var drawScene = function(scene){
		var elements = scene.elements;
		
		sortElements(elements);
		
		for(var i = 0; i < elements.length; i++){
			//TODO add other types
			if (elements[i] instanceof Polygon3D) { 
				drawPolygon(elements[i]);
				continue;
			}
			
			if (elements[i] instanceof Label3D) { 
				drawLabel(elements[i]);
				continue;
			}
			 
		}
		
	}
	
	var drawLabel = function(label){
		drawtext(label.text, label.vertex, label.color);
	}
	
	var drawPolygon = function(polygon){
		
		var vertices = polygon.transformedVertices();
		
		THIS.context.strokeStyle = polygon.color;
		THIS.context.fillStyle = "#FFF";
		THIS.context.beginPath();
		
		moveTo(vertices[0]);
		
		for(var i = 0; i < vertices.length; i++){
			var next = (i+1) % vertices.length;
			drawline(vertices[next], polygon.color);
		}
		
		THIS.context.fill();
		THIS.context.stroke();
		
	}
	
	var transformCamera = function(vertex){
		var v = Matrix3D.multiply(THIS.camera.transform, vertex.vector()).vertex();
		
		if (THIS.camera.usePerspective === true){
			if (THIS.camera.distance + v.z <= 0) return null;
			v.x = v.x * THIS.camera.distance / (THIS.camera.distance + v.z);
			v.y = v.y * THIS.camera.distance / (THIS.camera.distance + v.z);
		}
		
		return v;
	}
	
	var moveTo = function(vertex){
		var v = transformCamera(vertex);
		if(v) THIS.context.moveTo(-v.x, -v.y);
		return v;
	}
	
	var drawline = function(vertex, color){
		var v = transformCamera(vertex);
		if(v) THIS.context.lineTo(-v.x, -v.y);
		return v;
	}
	
	var drawtext = function(text, vertex, color){
		var v = transformCamera(vertex);
		if(v) {
			THIS.context.strokeStyle = color;
			THIS.context.fillStyle = color;
			THIS.context.textBaseline = 'middle';
			THIS.context.textAlign = 'center';
			THIS.context.fillText(text, -v.x, -v.y);
		}
	}

}
