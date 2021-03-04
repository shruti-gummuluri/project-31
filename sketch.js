const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops=100;
var drop=[]
var x=0
var thunder;

function preload(){
thunder1=loadImage("thunderbolt/1.png")    
thunder2=loadImage("thunderbolt/2.png")
thunder3=loadImage("thunderbolt/3.png")
thunder4=loadImage("thunderbolt/4.png")



}

function setup(){
   engine=Engine.create();
   world=engine.world

   createCanvas(500,700);
   if(frameCount % 150 === 0){
   for(var i=0; i<maxDrops; i++){
    drop.push(new Drops(random(0,400), random(0,400)))
   }
  }
    man1=new Man(250,550)
}

function draw(){
  Engine.update(engine);
  background(0);
  rand=Math.round(random(1,4));
  if(frameCount % 90 === 0)  {
    x=frameCount;
    thunder=createSprite(random(10,400),random(10,40),10,10);
    switch(rand){
        case 1:thunder.addImage(thunder1);
        break;
        case 2:thunder.addImage(thunder2);
        break;
        case 3:thunder.addImage(thunder3);
        break;
        case 4:thunder.addImage(thunder4);
        break;
        default:break
    }
    thunder.scale=random(0.2,0.7);
  }
  if(x+10 === frameCount && thunder){
       thunder.destroy();
  }
  man1.display();
  for(var i =0; i<maxDrops; i++){
      drop[i].display();
      drop[i].update();
  }
  drawSprites();
}   

