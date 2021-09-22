
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1; 
var END = 0;
var WIN = 2;
var gameState=PLAY;
var isDriving=false;
function preload(){
bg_img=loadImage("parking.png")
carImg=loadImage("carImg.png")
car2Img=loadImage("car2.png")	
car3Img=loadImage("truck.png")
car4Img=loadImage("car4.png")
car_left=loadAnimation("car14.png");
car_f=loadAnimation("carImg.png")
car_r=loadAnimation("car15.png")
car_b=loadAnimation("back.png")

car_m=loadSound("bhi.wav")
carR=loadSound("carReverse.mp3")
boom=loadAnimation("boom.png")
boom_s=loadSound("bulli.mp3")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;



  
	//Create the Bodies Here
   car = createSprite(1290,150,10,10);
   car.addAnimation("front",car_f);
   car.addAnimation("left",car_left);
   car.addAnimation("right",car_r);
   car.addAnimation("back",car_b);
  
   car.scale=.35;
  // car.debug=true;
   car.setCollider("rectangle",0,0,180,320)

   car2 = createSprite(220,150,10,10);
   car2.addImage(car2Img);
   car2.scale=.28;
   car2.addAnimation("boomi",boom);

   car3 = createSprite(220,450,10,10);
   car3.addImage(car3Img);
   car3.scale=.31;
   car3.addAnimation("boomi",boom);

   car4 = createSprite(440,450,10,10);
   car4.addImage(car4Img);
   car4.scale=.25;
   car4.addAnimation("boomi",boom);
     
   inv_p=createSprite(550,85,5,5);
   //inv_p.debug=true;
   inv_p.visible=false;



	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  if(gameState===PLAY){
  background(bg_img,1200,550);
  if (keyDown("RIGHT_ARROW")) {
	  car.x=car.x+5;
    car.changeAnimation("right",car_r) 
    car_m.play();
  }
  if (keyDown("LEFT_ARROW")) {
	car.x=car.x-5;
  car.changeAnimation("left",car_left)
  if (!car_m.isPlaying()&&isDriving===false) {
    isDriving=true;
   car_m.play();
  } 
}
if (keyDown("UP_ARROW")) {

	car.y=car.y-5;
 // car.changeAnimation("back",car_b)
 //carR.play();
}
if (keyDown("DOWN_ARROW")) {
  car.y=car.y+5;
  car.changeAnimation("front",car_f)
  car_m.play();
}
if(car.isTouching(car2)){
  car.destroy();
  boom_s.play();
  car2.changeAnimation("boomi",boom)
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
  
  }

if(car.isTouching(inv_p)){
car.destroy();

gameState=END;

}

if(car.isTouching(car3)){
  car3.destroy();
  boom_s.play();
  car3.changeAnimation("boomi",boom)
 
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
  }
  
if(car.isTouching(car4)){
  car.destroy();
  boom_s.play();
  car4.changeAnimation("boomi",boom)
  swal(
    {
      title: `Game Over!!!`,
      text: "Thanks for playing!!",
      imageUrl:
      "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
  
  }

 if(gameState===END){
  swal(
    {
      title: `Awesome You Did It`,
      text: "You parked the car successfully",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "PLAY AGAIN"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );

}
  }
  drawSprites();
  textSize(20);
  fill("black")
  text("PARK HERE", 490,50);
}



