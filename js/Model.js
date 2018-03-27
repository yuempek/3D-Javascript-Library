
var xlabel = new Label3D("X", new Vertex3D(35, -100,  0), '#F06')
var ylabel = new Label3D("Y", new Vertex3D( 0,  -65,  0), '#F90')
var zlabel = new Label3D("Z", new Vertex3D( 0, -100, 35), '#09C')


var xaxis = new Polygon3D([
				new Vertex3D( 0, -100, 0),
				new Vertex3D(30, -100, 0)
			], '#F06');
	
var yaxis = new Polygon3D([
				new Vertex3D(0, -100, 0),
				new Vertex3D(0,  -70, 0)
			], '#F90');
	
var zaxis = new Polygon3D([
				new Vertex3D(0, -100, 0),
				new Vertex3D(0, -100, 30)
			], '#09C');


var airplaneLeftWing = new Polygon3D([
		new Vertex3D(  0,   50,   0),
		new Vertex3D(-30,  -50,   0),
		new Vertex3D( -5,  -50,   0)
], '#222'); //Left wing           

var airplaneLeftBody = new Polygon3D([     
		new Vertex3D(  0,   50,   0),
		new Vertex3D( -5,  -50,   0),
		new Vertex3D(  0,  -50, -20)
], '#222'); //Left body           

var airplaneRightBody = new Polygon3D([    
		new Vertex3D(  0,   50,   0),
		new Vertex3D(  5,  -50,   0),
		new Vertex3D(  0,  -50, -20)
], '#222'); //Right body          

var airplaneRightWing = new Polygon3D([    
		new Vertex3D(  0,   50,   0),
		new Vertex3D(  5,  -50,   0),
		new Vertex3D( 30,  -50,   0)
], '#222'); //Right wing
	

var airplaneModel = {
	polygons : [airplaneLeftWing, airplaneLeftBody, airplaneRightBody, airplaneRightWing]
};



var floor = new Polygon3D([    
		new Vertex3D(  100,  100, -100),
		new Vertex3D( -100,  100, -100),
		new Vertex3D( -100,   80, -100),
		new Vertex3D(  100,   80, -100),
		new Vertex3D(  100,   60, -100),
		new Vertex3D( -100,   60, -100),
		new Vertex3D( -100,   40, -100),
		new Vertex3D(  100,   40, -100),
		new Vertex3D(  100,   20, -100),
		new Vertex3D( -100,   20, -100),
		new Vertex3D( -100,    0, -100),
		new Vertex3D(  100,    0, -100),
		new Vertex3D(  100,  -20, -100),
		new Vertex3D( -100,  -20, -100),
		new Vertex3D( -100,  -40, -100),
		new Vertex3D(  100,  -40, -100),
		new Vertex3D(  100,  -60, -100),
		new Vertex3D( -100,  -60, -100),
		new Vertex3D( -100,  -80, -100),
		new Vertex3D(  100,  -80, -100),
        new Vertex3D(  100, -100, -100),
		new Vertex3D( -100, -100, -100),
        new Vertex3D( -100,  100, -100),
		new Vertex3D(  -80,  100, -100),
		new Vertex3D(  -80, -100, -100),
		new Vertex3D(  -60, -100, -100),
		new Vertex3D(  -60,  100, -100),
		new Vertex3D(  -40,  100, -100),
		new Vertex3D(  -40, -100, -100),
		new Vertex3D(  -20, -100, -100),
		new Vertex3D(  -20,  100, -100),
		new Vertex3D(    0,  100, -100),		
		new Vertex3D(    0, -100, -100),
		new Vertex3D(   20, -100, -100),
		new Vertex3D(   20,  100, -100),
		new Vertex3D(   40,  100, -100),
		new Vertex3D(   40, -100, -100),
		new Vertex3D(   60, -100, -100),
		new Vertex3D(   60,  100, -100),
		new Vertex3D(   80,  100, -100),
		new Vertex3D(   80, -100, -100),
		new Vertex3D(  100, -100, -100),
		new Vertex3D(  100,  100, -100),
], '#CFC'); //floor
