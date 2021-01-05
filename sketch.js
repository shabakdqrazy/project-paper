
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,800,20);
log1 = new Log (800,600,10,5)
log2 = new Log (800,550,10,5)
log3 = new Log (800,525,5,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
 
}



