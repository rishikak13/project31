const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var rainfall = []
var fc;
var engine, world;

var rand;

function preload(){
    thunder1= loadImage("1.png");
    thunder2= loadImage("2.png");
    thunder3= loadImage("3.png");
  
}

function setup(){
    createCanvas(400,1000);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    
    umbrellaa= new Umbrellaa(200,800);

    //create drops
    if(frameCount% 150=== 0){
        for(var i = 0;i< 100;i++){
            rainfall.push(new Drops(random(0,400),random(0,400)));
        }
    }
    
}

function draw(){
    background(0);
   
 rand= Math.round(random(1,3))
 
 if(frameCount% 80 === 0){
 fc= frameCount
   console.log(fc)
     thunder = createSprite(random(10,370), random(10,30));
    
     if (rand ===1){
         
         thunder.addImage(thunder1);
     }
     else
     if (rand ===2){
        console.log(rand)
        thunder.addImage(thunder2);
    }
    else
    if (rand ===3){
        console.log(rand)
        thunder.addImage(thunder3);
    }
    
    
 }

 if(frameCount=== (fc+10) && thunder){

    thunder.destroy();
}

    umbrellaa.display();
    for(var i = 0;i< 100;i++){
        rainfall[i].display();
        rainfall[i].updateY();
    }
    drawSprites();
}   

