var bullet,wall,thickness,height=800;
var speed,weight;


function setup() {
  createCanvas(1600,height);
  speed=random(30,52);
  weight=random(223,321)
  thickness=random(22,83);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor="white"
  bullet.velocityX=speed
  wall = createSprite(1200, 200, thickness, height);
  wall.shapeColor=color(80,80,80);
 
  

}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    
   
   }
   if(damage>10){
     wall.shapeColor=color(255,0,0)
      
   }
   if(damage<10){
      wall.shapeColor=color(0,255,0)
      
   }
   
  drawSprites();
}


function hasCollided(bullet,wall){
 var bulletRightEdge =bullet.x-bullet.width;
 var wallLeftEdge =wall.x;
 if(bulletRightEdge>=wallLeftEdge){
    return true;
 }
 else{
    return false;
 }




}