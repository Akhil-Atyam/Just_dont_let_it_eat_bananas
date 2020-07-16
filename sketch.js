//Global Variables
var monk, backgroundy, ground, monimg, backimg, banimg, rockimg, groundimg, invisi,r,rimg, score,gg,ggimg;
var Obs, Ban;


function preload() {
  score = 0; 
  momimg = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  backimg = loadImage("jungle.jpg");
  banimg = loadImage("Banana.png");
  rocimg = loadImage("stone.png");
  rimg = loadImage("restart.png");
  groundimg = loadImage("ground.jpg");
  backgroundy = createSprite(200, 200, 10, 10);
  backgroundy.addImage("lol", backimg);
  ground = createSprite(300, 300, 600, 40);
  ground.addImage("lol", groundimg);
  ground.scale = 0.2;
  monk = createSprite(100, 230, 10, 10);
  monk.scale = 0.2;
  monk.addAnimation("lol", momimg);
  ground.velocityX = -5;
  invisi = createSprite(300, 300, 600, 20);
  invisi.visible = false;
  ggimg = loadImage("gameOver.png");
  gg = createSprite(300,150,10,10);
  gg.visible = false;
  gg.addImage("lol",ggimg);
  r = createSprite(300,200,10,10);
  r.addImage("lol",rimg);
  r.scale = 0.5;
  r.visible = false;
  Ban = new Group();
  Obs = new Group();
}


function setup() {

  createCanvas(600, 300);
}


function draw() {
  background(255);
  banana();
  drawSprites();
  if (ground.x < 250) {
    ground.x = 300;
  }
  monk.collide(invisi);
  if (monk.y <= 240) {
    monk.velocityY = monk.velocityY + 0.8;
  }
  fill("white");
  textSize(16);
  text("Score : "+score,300,50);
  if (keyDown("space")&&monk.isTouching(ground) ) {
    monk.velocityY = -15;
  }
  if (monk.isTouching(Ban) && r.visible === false) {
    Ban.destroyEach();
    score = score + 7;
    monk.scale = monk.scale + 0.05;

  }
  if (monk.isTouching(Obs)&&r.visible === false) {
    Obs.destroyEach();
    score = score - 5;
    monk.scale = monk.scale - 0.05;

  }
  
  if(monk.scale < 0||monk.scale === 0||score < 0){
    score = 0;
    gg.visible = true;
    monk.visible = false;
     r.visible = true;
  }
  if(score === 0 && mouseWentDown()){
  score = 0;
    monk.scale = 0.2;
    monk.visible = true;
    r.visible = false;
    gg.visible = false;
  
  }
  
}

function banana() {
  if (frameCount % 200 === 0) {
    var ban = createSprite(700, 100, 10, 10);
    ban.addImage("lol", banimg);
    ban.velocityX = -5;
    ban.lifetime = 150;
    ban.scale = 0.06;
    Ban.add(ban);
  }
  if (frameCount % 500 === 0) {
    var roc = createSprite(700, 240, 10, 10);
    roc.addImage("lol", rocimg);
    roc.velocityX = -8;
    roc.lifetime = 150;
    roc.scale = 0.2;
    Obs.add(roc);
  }

}