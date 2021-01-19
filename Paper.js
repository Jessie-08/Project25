class Paper{
    constructor(x,y,r){
       var options={
           isStatic :false,
            restitution :0.3,
            friction :0,
            density :1.2
       }
       this.x=x;
       this.y=y;
       this.r=r;
       this.width=width;
       this.height = height;
       this.image = loadImage("sprites/paper.png");
       this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
       World.add(world,this.body);
       
       
      // World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        //strokeWeight(3);
        //stroke("yellow");
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
     }

}