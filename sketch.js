var movingR, stationaryR, tall


function setup() {
  createCanvas(800,400);
 movingR = createSprite(200, 200, 50, 50);
 stationaryR = createSprite(200, 200, 50, 50);
 tall = createSprite(150,100,50,70)

 movingR.shapeColor = "blue"
 stationaryR.shapeColor = "blue"
 tall.shapeColor = "blue"
}

function draw() {
  background("black");  
 
  movingR.x = mouseX
  movingR.y = mouseY

  if(Touching(movingR, tall)){
    tall.shapeColor = "red"
  }
  else
  {tall.shapeColor = "blue"}
 
  drawSprites();
}

