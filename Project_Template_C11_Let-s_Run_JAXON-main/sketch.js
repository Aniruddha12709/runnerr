
function preload(){
  //pre-load images
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

  
}

function setup(){
  createCanvas(400,400);
  
  //creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;

}
// moving background
path = createSprite(200,200);
path.addImg(pathImg);
path.velocityY = 4;


function draw() {
  background(0);

}
