var wall;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed = random (55,90);
  weight = random (400,1500)
 
speed=random(55,83)
weight=random(400,1500)

thickness=random(22,82)


  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapecolor=color(255);

  wall = createSprite(1500,200,60,height/2)
  wall.shapecolor = (80,80,80);

}

function draw() {
  background("black");  
  if(wall.x-bullet.x <(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180){
     wall.shapeColor=color("red");
    }
   
    if(deformation<100){
      wall.shapeColor=color("green");
    }
  }
  drawSprites();
}