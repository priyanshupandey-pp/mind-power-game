var bird, birdImage, enemyG, enemyImage, fruit1, fruit2,
    fruit3, fruit4, fruitG, fruit1Image, fruit2Image, fruit3Image, fruit4Image, score,gameOverImage
var PLAY=1
var END=0
var gameState=PLAY



function preload(){
  birdImage= loadImage("hello.png")
  enemyImage=loadAnimation("alien1.png","alien2.png")
  fruit1Image=loadImage("fruit1.png")
  fruit2Image=loadImage("fruit2.png")
  fruit3Image=loadImage("fruit3.png")
  fruit4Image=loadImage("fruit4.png")
  gameOverImage=loadImage("gameover.png")
 
}

function setup(){
  createCanvas(600, 600);
  
  bird=createSprite(200,200,100,100)
  bird.addImage(birdImage)
  bird.scale=0.2
  
  
  
  enemyG= new Group()
  fruitG= new Group()
  
  score=0
  
}

function draw(){
background("skyblue")
  
  

 if (gameState===PLAY) {
bird.x=World.mouseX
bird.y=World.mouseY
  
  var select_item = Math.round(random(1,5));
  if (World.frameCount%100===0){
   if (select_item == 1) {
      fruit1()
    } else if (select_item == 2) {
      enemy()
    } else if (select_item == 3) {
      fruit2()
    } else if (select_item == 4){
      fruit3()
   } else {
      fruit4()
    }
     }
 
   if(bird.isTouching(fruitG)){
     fruitG.destroyEach()
    score=score+1
     }
   
   else
     
   if(bird.isTouching(enemyG)){
     enemyG.destroyEach()
    gameState=END;
     fruitG.destroyEach()
     enemyG.setVelocityXEach(0)
     fruitG.setVelocityXEach(0)
     bird.addImage(gameOverImage)
     bird.scale=2
     bird.x=300
     bird.y=200
     
     
     }
   }
  
  
  
  
  
 
  
  drawSprites();
  
 text("Score: "+ score, 500,50);
  
}

function enemy(){

 var enemy=createSprite(600,Math.round(random(30,400)),10,10)
  
 enemy.addAnimation("enemy_blinking",enemyImage)
  enemy.velocityX=-12
  enemy.scale=0.99
  enemy.lifetime=150
  enemyG.add(enemy)
  
}

function fruit1(){
   var fruit1=createSprite(600,Math.round(random(30,400)),10,10)
    fruit1.addImage(fruit1Image)
  fruit1.velocityX=-6
  fruit1.scale=0.2
  fruit1.lifetime=150
  fruitG.add(fruit1)
  }

function fruit2(){
   var fruit2=createSprite(600,Math.round(random(30,400)),10,10)
    fruit2.addImage(fruit2Image)
  fruit2.velocityX=-6
  fruit2.scale=0.2
  fruit2.lifetime=150
  fruitG.add(fruit2)
  }

function fruit3(){
   var fruit3=createSprite(600,Math.round(random(30,400)),10,10)
    fruit3.addImage(fruit3Image)
  fruit3.velocityX=-6
  fruit3.scale=0.2
  fruit3.lifetime=150
  fruitG.add(fruit3)
  }

function fruit4(){
   var fruit4=createSprite(600,Math.round(random(30,400)),10,10)
    fruit4.addImage(fruit4Image)
  fruit4.velocityX=-6
  fruit4.scale=0.2
  fruit4.lifetime=150
  fruitG.add(fruit4)
  }
function food(){
  if (this.score<5){
    bird.scale=scale+2
  }
}