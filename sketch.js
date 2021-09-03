
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var top_wall1;
var top_wall2;
var top_wall3;
var btn1


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  

  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(240,345,20,70);
  top_wall1 = new Ground(370,335,20,80);
  top_wall2 = new Ground(370,200,20,120);
  top_wall3 = new Ground(300,150,100,20);


var ball_options={
  restitution:0.95 
}
  
btn1 = createImg('up.png')
btn1.position(20,30)
btn1.size(50,50)
btn1.mouseClicked(hForce)

 ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  ellipse(ball.position.x,ball.position.y,20);
  


  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  Engine.update(engine);

  

}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}