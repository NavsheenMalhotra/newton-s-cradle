class Bob {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':1.5,
          'friction':0.5,
          'density':0.2,
      }
      this.body = Bodies.circle(x,y,40,options);
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill('pink');
      strokeWeight(3);
      stroke('white');
      ellipseMode(RADIUS)
      ellipse(0,0,this.width,this.height);
      pop();
    }
}