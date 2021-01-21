const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function setup() {
	createCanvas(1200, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1000,450);
	paperObject=new paper(170,410,35);
	groundObject=new ground(width/2,465,width,20);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1000,
	    height: 500,
	    wireframes: false
	  }
	})
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background('black');
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:63,y:-63});
  	}
}