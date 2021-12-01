class Ball
{
  constructor(x, y, w, h) 
  {
    let options = {
   restitution: 0.95,
   frictionAir:0.01
    };
    
    this.body = Bodies.circle(x, y, r,options);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    circleMode(CENTER);
    stroke(255);
    fill(127);
    ellipse(this.position.x,this.position.y,this.r);
    pop();
  }
  
}