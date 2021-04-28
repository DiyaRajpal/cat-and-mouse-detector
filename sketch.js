var bgImg,bg;
var catImg1,catImg2,catImg3,cat;
var mouseImg1,mouseImg2,mouseImg3,mouse;

function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    catImg1=loadImage("cat1.png");
    mouseImg1=loadImage("mouse1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    catImg3=loadImage("cat4.png");
    mouseImg3=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   // bg=createSprite(1000,800);
    //bg.addImage("background",bgImg);
    cat=createSprite(800,600,20,20);
    cat.addAnimation("catImg",catImg2);
    cat.scale=0.2;
    mouse=createSprite(800,600,20,20)
    mouse.addImage("mouseImg",mouseImg1);
    mouse.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x,(cat.width-mouse.width)/2){
    mouse.addImage("mouseChanged",mouseImg3);  
    mouse.changeAnimation("mouseChanged");
    cat.addImage("catChanged",catImg3);  
    cat.changeAnimation("catChanged");
  }
    drawSprites();

    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2); 
    mouse.changeAnimation("mouseTeasing");
    mouse.x=mouse.x+3;
 }
  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2); 
    mouse.changeAnimation("mouseTeasing");
    mouse.x=mouse.x-3;
}
}