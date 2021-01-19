class Bin{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        //this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 200;
        this.height = 213;
        this.thickness = 20;
        this.image = loadImage("sprites/dustbingreen.png")


        this.botttomBody  = Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true});
        this.leftwallBody = Bodies.rectangle(this.x, this.width/2, this.height/2, this.thickness, this.height, {isStatic:true});
        this.rightwallBody = Bodies.rectangle(this.x, this.width/2, this.y, this.height/2, this.thickness, this.height, {isStatic:true});
        World.add(world,this.botttomBody);
        World.add(world,this.leftwallBody);
        World.add(world,this.rightwallBody);
    }
    display(){
        var posBottom = this.botttomBody.position;
        var posLeft = this.leftwallBody.position;
        var posRight = this.rightwallBody.position;
      
        push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        //strokeWeight(4);
        angleMode(RADIANS)
        fill(255)
        rotate(this.angle)
        //rect(0,0,this.wallThickness, this.dustbinHeight);
        pop()

        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        //strokeWeight(4);
        angleMode(RADIANS)
        fill(255)
        rotate(-1*this.angle)
        //rect(0,0,this.wallThickness, this.dustbinHeight);
        pop()

        push()
        translate(posBottom.x, posBottom.y+10);
        rectMode(CENTER)
        //strokeWeight(4);
        angleMode(RADIANS)
        fill(255)
        imageMode(CENTER);
        image(this.image, 0,-this.height/2,this.width, this.height)
        //rect(0,0,this.dustbinWidth, this.wallThickness);
        pop()
    }
}