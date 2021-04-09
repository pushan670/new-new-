var garden_img,images_img,house_img,dimond_img,sec1_img,sec2_img,laser_img,thief_img
var images,house,dimond,sec1,sec2,laser,thief
function preload () {
  images_img=loadImage("images/images.png")
  house_img=loadImage("images/HOUSE.jpg")
  dimond_img=loadImage("images/DIMOND.jpg")
  laser_img=loadImage("images/LASER 1.png")
  sec1_img=loadImage("images/SEC 1.jpg")
  sec2_img=loadImage("images/SEC2.jpg")
  thief_img=loadImage("images/THIEF.jpg")
  garden_img=loadImage("images/garden.jpg")
}

function setup() {
  createCanvas(700,500);

  dimond = createSprite (450,4530,10,10);
  dimond.addImage(dimond_img)
  dimond.scale=0.07

  thief = createSprite (10,100,10,10);
  thief.addImage(thief_img)
  thief.scale=0.09

  sec2 = createSprite (220,230,10,10);
  sec2.addImage(sec2_img)
  sec2.scale=0.09
  sec2.velocityX=40
  sec2.velocityY=0

  
  sec1 = createSprite (300,300,10,10);
  sec1.addImage(sec1_img)
  sec1.scale=0.09
  sec1.velocityX=40
  sec1.velocityY=0
  
  laser = createSprite (200,200,100,10);
  laser.shapeColor=("red")
  laser.velocityX=10
  laser.velocityY=0

  laser2 = createSprite (400,400,100,10);
  laser2.shapeColor=("red")
  laser2.velocityX=10
  laser2.velocityY=0


  house = createSprite (610,450,10,10);
  house.addImage(house_img)
  house.scale=0.5

}

function draw() {
  background(garden_img);
  edges=createEdgeSprites()
  sec2.bounceOff(edges[1])
  sec2.bounceOff(edges[0])
  sec1.bounceOff(edges[1])
  sec1.bounceOff(edges[0])
  thief.bounceOff(edges[0])
  thief.bounceOff(edges[1])
  thief.bounceOff(edges[2])
  thief.bounceOff(edges[3])
  laser.bounceOff(edges[1])
  laser.bounceOff(edges[0])
  laser2.bounceOff(edges[1])
  laser2.bounceOff(edges[0])


  if (keyDown(DOWN_ARROW) ) {
    thief.velocityX=0
    thief.velocityY=5
  }
  
  if (keyDown(UP_ARROW) ) {
    thief.velocityX=0
    thief.velocityY=-5
  }

  if (keyDown(LEFT_ARROW) ) {
    thief.velocityX=-5
    thief.velocityY=0
  }

  if (keyDown(RIGHT_ARROW) ) {
    thief.velocityX=5
    thief.velocityY=0
  }

 imageMode(CENTER)
 
  drawSprites();
}