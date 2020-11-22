var bullet, bullet1, bullet2, bullet3, bulletimg, wall, wall1, wall2, wall3;
var weight, speed, thickness, weight1, speed1, thickness1, weight2, speed2, thickness2, weight3, speed3, thickness3;
var bg, bg1, bg2, bg3;

function preload(){
  bulletimg=loadImage("bullet.png");
}

function setup() {
  createCanvas(800,800);

  bg=createSprite(400, 100, 800, 150);
  bg.shapeColor="black";
  bg1=createSprite(400, 300, 800, 150);
  bg1.shapeColor="black";
  bg2=createSprite(400, 500, 800, 150);
  bg2.shapeColor="black";
  bg3=createSprite(400, 700, 800, 150);
  bg3.shapeColor="black";

  bullet=createSprite(100, 100, 30, 30);
  bullet.addImage("bullet", bulletimg);
  bullet.scale=0.1;

  bullet1=createSprite(100, 300, 30, 30);
  bullet1.addImage("bullet", bulletimg);
  bullet1.scale=0.1;

  bullet2=createSprite(100, 500, 30, 30);
  bullet2.addImage("bullet", bulletimg);
  bullet2.scale=0.1;

  bullet3=createSprite(100, 700, 30, 30);
  bullet3.addImage("bullet", bulletimg);
  bullet3.scale=0.1;

  wall2=createSprite(700, 500, 0, 100);
  wall2.width=thickness2;

  wall1=createSprite(700, 300, 0, 100);
  wall1.width=thickness1;

  wall3=createSprite(700, 700, 0, 100);
  wall3.width=thickness3;

  wall=createSprite(700, 100, 0, 100);
  wall.width=thickness;

  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);

  speed1=random(223, 321);
  weight1=random(30, 52);
  thickness1=random(22, 83);

  speed2=random(223, 321);
  weight2=random(30, 52);
  thickness2=random(22, 83);

  speed3=random(223, 321);
  weigh3t=random(30, 52);
  thickness3=random(22, 83);

}

function draw() {
  background('white');
   
  bullet.velocityX=speed;
  bullet1.velocityX=speed;
  bullet2.velocityX=speed;
  bullet3.velocityX=speed;
  
  
  if(wall.x-bullet.x<=(wall.width+bullet.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255, 0, 0);
    }
    if(damage<10){
      wall.shapeColor=color(0, 255, 0);
    }

  }

  if(wall1.x-bullet1.x<=(wall1.width+bullet1.width)/2){
    bullet1.velocityX=0;
    var damage=0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1)
    if(damage>10){
      wall1.shapeColor=color(255, 0, 0);
    }
    if(damage<10){
      wall1.shapeColor=color(0, 255, 0);
    }

  }

  if(wall2.x-bullet2.x<=(wall2.width+bullet2.width)/2){
    bullet2.velocityX=0;
    var damage=0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2)
    if(damage>10){
      wall2.shapeColor=color(255, 0, 0);
    }
    if(damage<10){
      wall2.shapeColor=color(0, 255, 0);
    }

  }

  if(wall3.x-bullet3.x<=(wall3.width+bullet3.width)/2){
    bullet3.velocityX=0;
    var damage=0.5*weight*speed3*speed3/(thickness3*thickness3*thickness3)
    if(damage>10){
      wall3.shapeColor=color(255, 0, 0);
    }
    if(damage<10){
      wall3.shapeColor=color(0, 255, 0);
    }

  }

  drawSprites();
}