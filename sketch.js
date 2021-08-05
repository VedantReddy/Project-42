var iss, spacecraft;
var hasDocked = false;

function preload() {
  issImage = loadImage("iss.png");
  backgroundImage = loadImage("spacebg.jpg");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1200,600);
  
  iss = createSprite(600,260);
  iss.addImage(issImage);
  iss.scale = 0.9;

  spacecraft = createSprite(285,500);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.3;
}

function draw() {
  background(backgroundImage);  
  
  if(!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")) {
      spacecraft.addImage(spacecraft2);
      spacecraft.y = spacecraft.y - 2;
    }
    if(keyDown("DOWN_ARROW")) {
      spacecraft.addImage(spacecraft2);
    }
    if(keyDown("LEFT_ARROW")) {
      spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x - 2;
    }
    if(keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x + 2;
    }
  }
  
  if(spacecraft.y <= (iss.y+131) && spacecraft.x <= (iss.x-16)) {
    hasDocked = true;
    textSize(20);
    fill("white");
    text("Docking Successful", 100, 100);
  }

  drawSprites();
}