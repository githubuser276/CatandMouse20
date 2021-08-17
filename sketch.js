var cat, mouse, bg;
var catImg1, mouseImg1, bgImg;
var catMov, mouseTease, catEnd, mouseEnd;

function preload() {
    //load the images here
    catImg1 =loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    bgImg = loadImage("images/garden.png");

    catMov = loadAnimation("images/cat2.png","images/cat3.png")
    mouseTease = loadAnimation("images/mouse2.png","images/mouse3.png")
    catEnd = loadAnimation("images/cat4.png")
    mouseEnd = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,600,50,50);
    cat.addAnimation("TOM",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600,20,20);
    mouse.addAnimation("JERRY",mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if( cat.x - mouse.x < (cat.width - mouse.width)/2){

    cat.velocityX = 0;
    cat.addAnimation("CATEND",catEnd)
    cat.changeAnimation("CATEND")
    cat.scale = 0.2

    mouse.addAnimation("MOUSEEND",mouseEnd)
    mouse.changeAnimation("MOUSEEND")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){

    cat.velocityX = -5;
    cat.addAnimation("TOMMOVING",catMov);
    cat.changeAnimation("TOMMOVING");
    cat.scale = 0.2

    mouse.frameDelay = 25;
    mouse.addAnimation("JERRYTEASING",mouseTease);
    mouse.changeAnimation("JERRYTEASING");

  }

}
