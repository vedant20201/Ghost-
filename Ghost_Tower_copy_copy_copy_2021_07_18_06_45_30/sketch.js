var jump, jumpimage;
var gstand, gstandimage;
var tow, towimage;

function preload() {

  gstandimage = loadImage("standing.png");
  jumpimage = loadImage("jumping.png");
  towimage = loadImage("tower.png");

}

function setup() {
  createCanvas(600, 500);

  tow = createSprite(300, 250)
  tow.addImage(towimage);
  tow.velocityY = 3;

  gstand = createSprite(300, 250);
  gstand.addImage(gstandimage);
  gstand.scale = 0.3

}

function draw() {
  background(150);



  if (tow.y > 600) {
    tow.y = 300
  }

  if (keyDown('space')) {
    gstand.velocityY = -7
  }
  gstand.velocityY = gstand.velocityY + 0.6

  if (keyDown("right")) {
    gstand.x = gstand.x + 5
  }

  if (keyDown("left")) {
    gstand.x = gstand.x - 5
  }


  drawSprites()
}