function Circle(x,y,r){
  //set behaviour of object
  var options={
    friction:0.8,
    restitution:0.8
  }

  //Create cicle
  this.body = Bodies.circle(x,y,r,options);

  //add object in world
  this.r = r;
  World.add(world, this.body);

  //function for display on canvas
  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(125);
    circle(0,0,this.r*2);
    pop();
  }
}