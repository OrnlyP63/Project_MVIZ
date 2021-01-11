//set up class from matter.js
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

//declare some variable
var engine;
var world;
var boxes = [];
var ground;
var ground2;
var ball;

function setup() {
  //Create canvas and world
  var canvas = createCanvas(800, 400);
  canvas.parent('Canvas');
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //Create Body of Ball and Walls
  ground = new Boundary(400, 400, width, 10, PI);
  ground2 = new Boundary(0, 200, height, 10, PI / 2);
  ball = new Circle(25, 380, 20);

  //select button "shoot me" by id for execute Vforce function
  var button = select('#button');
  button.mousePressed(Vforce);
  //select for get value by id from textInput x-force and y-force
  xforce = select('#xText');
  yforce = select('#yText');
  //select button "reset" by id for execute resetSketch function
  buttonRe = select('#reset');
  buttonRe.mousePressed(resetSketch);

  //select Slider forn id for get value for set position target
  slideX = select('#customRange1');
  slideY = select('#customRange2');
  //select label "check" by id display result
  check = select('#check');
  check.html('Result : Not pass');


}

function resetSketch() {
  //Let velocity of ball be (0,0)
  Body.setVelocity(ball.body, { x: 0, y: 0 });
  //Let position of ball be origin
  Body.setPosition(ball.body, { x: 25, y: 350 });
  //Chaged Display be "Not pass"
  check.html('Result : Not pass');
}


function Vforce() {
  //Set up mass value
  Mass = select('#Mass');
  Body.setMass(ball.body, Mass.value());
  //Apply force for a ball object
  Body.applyForce(ball.body, { x: ball.body.position.x, y: ball.body.position.y }, { x: xforce.value(), y: -yforce.value() });

}

function Complete() {
  //Check distance between target and ball
  resX = Math.abs(ball.body.position.x - slideX.value());
  resY = Math.abs(ball.body.position.y - 400 + slideY.value());
  //condition for display "Resutl : pass"
  if (resX < 10 && resY < 10) {
    check.html('Result : Pass');
  } 
}


//Loop function that draw canvas
function draw() {
  //set background of canvas
  background(255);
  //set text size
  textSize(24);
  //Display target positon
  text('x position : ' + slideX.value(), 10, 30);
  text('y position : ' + slideY.value(), 10, 60);

  //function for display object on canvas
  ground.show();
  ground2.show();
  ball.show();

  //Display target
  fill(200, 20, 50);
  rectMode(CENTER);
  rect(0 + slideX.value(), 400 - slideY.value(), 20, 20);
  //Check simulator is complete (ball pass throught target)
  Complete();
}