var bgImg,bg;
var catImg1,catImg2,catImg3,cat;
var mouseImg1,mouseImg2,mouseImg3,mouse;

function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    catImg1=loadAnimation("cat1.png");
    mouseImg1=loadAnimation("mouse1.png");
    catImg2=loadAnimation("cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("mouse2.png","images/mouse3.png");
    catImg3=loadAnimation("cat4.png");
    mouseImg3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(1000,800);
    bg.addImage("background",bgImg);
    cat=createSprite(800,400,20,20);
    cat.addImage("catImg",catImg1);
    mouse.createSprite(800,300,20,20)
    mouse.addImage("mouseImg",mouseImg1);
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x,(cat.width-mouse.width)/2){
    mouse.addAnimation("mouseChanged",mouseImg3);  
    mouse.changeAnimation("mouseChanged");
    cat.addAnimation("catChanged",catImg3);  
    cat.changeAnimation("catChanged");
  }
    drawSprites();

    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode==="right_arrow"){
    mouse.addAnimation("mouseTeasing",mouseImg2); 
    mouse.changeAnimation("mouseTeasing");
    mouse.x=mouse.x+3;
 }
  if(keyCode==="left_arrow"){
    mouse.addAnimation("mouseTeasing",mouseImg2); 
    mouse.changeAnimation("mouseTeasing");
    mouse.x=mouse.x-3;
}
}