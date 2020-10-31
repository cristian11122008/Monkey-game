
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  monkey=createSprite(80,450,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(250,490,500,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  

  
}


function draw() {
  //creating monkey
 background('green')
  monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   if(keyDown("space")&&monkey.y>454){
        monkey.velocityY = -12; 
    }
    console.log(monkey.y);
   
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:")
  drawSprites();
  
    if (frameCount % 60 === 0) {
    banana = createSprite(500,200,50,20);
    banana.y = Math.round(random(10,60));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    }
}






