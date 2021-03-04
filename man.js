class Man{
    constructor(x,y){
        var options={
        isStatic : true
    }
    this.image=loadImage("Walking Frame/walking_1.png");
    this.umbrella=Bodies.circle(x,y,50,options);
    this.radius=50;
    World.add(world, this.umbrella);
}
display(){
    imageMode(CENTER);
    image (this.image,this.umbrella.position.x, this.umbrella.position.y,300,300);
}
}