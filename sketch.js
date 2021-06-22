// create the variables
var garden,rabbit;
var gardenImg,rabbitImg;
var apple, leaf
var appleImg, leafImg

function preload(){
  //load the Images
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple-cutout.png")
  leafImg = loadImage("leaf-cutout.png")
}

function setup(){
  // create the canvas
  createCanvas(400,400);
   

  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  //background
  background(0);
  //Confine the rabbit
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  
  
  
  // allow rabbit to move
  rabbit.x = World.mouseX
  //Randomize the apples and leaves
  var appleLeaf = Math.round(random(1,2))
  if(frameCount % 80 == 0){
    if(appleLeaf == 1){
      createApples()
      //depth
      rabbit.depth = apple.depth
      rabbit.depth +1
    }
    else{
      createLeaves()
      //depth
      rabbit.depth = leaf.depth
      rabbit.depth + 1

    }
    
    
  }
  
  //draw the sprites
  drawSprites();
}

// create the apples
function createApples(){
  apple = createSprite(random(50,350),40,10,10 )
  apple.velocityY = 3
  apple.addImage(appleImg)
  apple.scale = 0.09
  apple.lifetime = 125
}
// create the leaves
function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10 )
  leaf.velocityY = 3
  leaf.addImage(leafImg)
  leaf.scale = 0.2
  leaf.lifetime = 125
 
}

