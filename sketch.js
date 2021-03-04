const Engine=Matter.Engine;

const World=Matter.World;

const Bodies=Matter.Bodies;



var engine,world,ground;

var ball



function setup()

{

  var canvas=createCanvas(400,400);

  engine=Engine.create();

  world=engine.world;

  var options={

    isStatic:true

  }

  ground=Bodies.rectangle(200,380,300,20,options);
  World.add(world,ground);

var bp={
  restitution:1.0
}

  ball=Bodies.circle(200,100,20,bp);
  World.add(world,ball);

  console.log(ground);

  console.log(ground.type);

  console.log(ground.position.x);

  console.log(ground.position.y);



}



function draw()

{

  background(0);

  Engine.update(engine);

  rectMode(CENTER);

  rect (ground.position.x,ground.position.y,300,20);

ellipseMode(RADIUS)
  ellipse (ball.position.x,ball.position.y,20);

  drawSprites();



}
