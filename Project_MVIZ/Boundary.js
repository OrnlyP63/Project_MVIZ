function Boundary(x,y,w,h,a){
  //set behaviour of object
  var options={
    friction:0.5,
    restitution:0.6,
    isStatic:true,
    angle:a
  }

  //Create rectangle
  this.body = Bodies.rectangle(x,y,w,h,options);
  
  //add object in world
  this.w = w;
  this.h = h;
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
    fill(0);
    rect(0,0,this.w,this.h);
    pop();
  }
}