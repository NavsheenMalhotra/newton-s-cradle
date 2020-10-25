
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var ground;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1200, 800);
    engine = Engine.create();
	world = engine.world;
ground=new Ground(600, 60, 700, 60);
bob1=new Bob(1000, 600);
bob2=new Bob(800, 600);
bob3=new Bob(600, 600);
bob4=new Bob(400, 600);
bob5=new Bob(200, 600); 
rope1=new Rope(bob1.body, ground.body, 300, 30);
rope2=new Rope(bob2.body, ground.body, 150, 30);
rope3=new Rope(bob3.body, ground.body, 1, 30);
rope4=new Rope(bob4.body, ground.body, -150, 30);
rope5=new Rope(bob5.body, ground.body, -300, 30);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  bob3.display();
  bob1.display();
  bob2.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  drawSprites();
 
}
function mouseDragged() {
 Matter,Body.setPosition(bob1.body,  {x:mouseX, y:mouseY})
}


