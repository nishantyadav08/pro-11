
function preload(){
  pathAnimation = loadAnimation("path.png");
  path=loadAnimation("path.png")
  
  pathAnimation = loadAnimation("path.png");
  path=loadAnimation("path.png")

  
  
}

function setup(){
  createCanvas(400,400);

  path=createSprites(200,200,20,20);

  

}

function draw() {
  background("blue");
drawSprites();
}
