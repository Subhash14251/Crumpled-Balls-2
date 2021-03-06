class Dustbin 
{
    constructor(x, y, width, height) 
    {
      var options = 
      {
          isStatic:true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
     // var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
     // strokeWeight(4);
     // stroke("purple");
     // fill(255);
      //imagerect(0, 0, this.width, this.height);
      pop();
    }
  };