var frect,mrect;




function setup() {
  createCanvas(800,400);
 frect=createSprite(400,200,20,100)
 mrect=createSprite(300,100,80,10)

}

function draw() {
  background(255,255,255);  
  mrect.x=mouseX
  mrect.y=mouseY
  if((mrect.x-frect.x<mrect.width/2+frect.width/2)
 && (frect.x-mrect.x<mrect.width/2+frect.width/2)){
    mrect.shapeColor="red"
    frect.shapeColor="red"
  }
  else
  {  mrect.shapeColor="green"
  frect.shapeColor="green"

  }
  drawSprites();
}