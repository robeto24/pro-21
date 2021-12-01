
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var muro1;
var muro2;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.


	var ground_options ={
		isStatic: true
	  };

	  var muro1_options ={
		isStatic: true
	  };

	  var muro2_options ={
		isStatic: true
	  };



	var ball_options = {
		restitution: 0.3,
		frictionAir:0
	  }


 ground = Bodies.rectangle(400,500,800,20,ground_options);
  World.add(world,ground);

  muro1 = Bodies.rectangle(400,440,20,80,muro1_options);
  World.add(world,muro1);

  muro2 = Bodies.rectangle(530,440,20,80,muro2_options);
  World.add(world,muro2);

	Engine.run(engine);
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();


  rect(ground.position.x,ground.position.y,800,40);
  rect(muro1.position.x,muro1.position.y,20,80);
  rect(muro2.position.x,muro2.position.y,20,80);
  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 
}


	

function keyPressed(){ 
	if(keyCode === UP_ARROW){
		
		
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145}); }
 
	}





	



