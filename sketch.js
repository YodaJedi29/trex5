var numeroaleatorio;
var score = 0 ;
var trex, trex_running;
var fundo, imagemdefundo;
var nuvem, imagemdanuvem;
var cactus, imagemdocactus1, imagemdocactus2, imagemdocactus3, imagemdocactus4, imagemdocactus5, imagemdocactus6;
var state =  1;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  imagemdefundo = loadImage("ground2.png");
  imagemdanuvem = loadImage("cloud.png");
  imagemdocactus1 = loadImage("obstacle1.png")
  imagemdocactus2 = loadImage("obstacle2.png")
  imagemdocactus3 = loadImage("obstacle3.png")
  imagemdocactus4 = loadImage("obstacle4.png")
  imagemdocactus5 = loadImage("obstacle5.png")
  imagemdocactus6 = loadImage("obstacle6.png")

}

function setup() {
  createCanvas(600, 200)
  fundo = createSprite(50, 158)
  trex = createSprite(100, 150)
  trex.scale = 0.5;

  trex.addAnimation("correndo", trex_running);
  fundo.addAnimation("fundinho", imagemdefundo);
  fundo.velocityX = -5

}
trex.bouceOff.fundo






function draw() {
  background("white")
  if (state = 1) {
    
    text("Score: = "+ score, 500, 50);
  score = score + 1;
  if (fundo.x < 0) {
    fundo.x = fundo.width / 2;
  };
  trex.collide(fundo);
  if (keyDown("space")) {
    trex.velocity.Y = -10;

  } else {
    trex.velocityY = trex.velocityY + 0.8
    if (keyDown ("space") && trex.y > 100 ){
      trex.velocityY = - 10
    }

  }
  spawncactus();
  spawnnuvem();}

  if(state = 0){






  }
  drawSprites();
}





function spawnnuvem() {

  if (frameCount % 60 == 0) {
    nuvem = createSprite(550, Math.round(random(0, 200)));
    nuvem.velocityX = -3;
    nuvem.addAnimation("nuvenzinha", imagemdanuvem);

    nuvem.lifetime = 200;

    nuvem.depth = trex.depth;
    trex.depth = trex.depth + 1;

  }

}

function spawncactus() {
  numeroaleatorio = Math.round(random(1, 6));


  if (frameCount % 200 == 0) {
    cactus = createSprite(600, 130);
    numeroaleatorio = Math.round(random(1, 6));
    cactus.velocityX = -2;
    cactus.lifetime = 300;
    cactus.scale = 0.7

    switch (numeroaleatorio) {
      case 1:
        cactus.addImage(imagemdocactus1);
        break;


      case 2:
        cactus.addImage(imagemdocactus2);
        break;


      case 3:
        cactus.addImage(imagemdocactus3);
        break;


      case 4:
        cactus.addImage(imagemdocactus4);
        break;


      case 5:
        cactus.addImage(imagemdocactus5);
        break;


      case 6:
        cactus.addImage(imagemdocactus6);
        break;










    }

  };







}