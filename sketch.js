
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b;
var ground;
var ball;


function preload()
{

}

function setup() {
	createCanvas(1800, 700);
	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	ball=new Paper(200,200,5);

    b=new Dustbin(1380,650,250,70);

	World.add(world, ball);
	World.add(world, b);
	

	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gold");
  Engine.update(engine);
  ball.display();
  b.display();
  drawSprites();
  keyPressed();
}

function keyPressed() {
	if (keyWentDown ( UP_ARROW)) {
	   
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:5.8,y:-5.7});
	   
	 }
   }

