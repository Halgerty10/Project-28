const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground;
var mangoes,slingshot;
var boy,stone;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(550,400,50,300);
	mangoes = new Mango(495,380,25,25);
	mangoes2 = new Mango(500,320,25,25);
	mangoes3 = new Mango(600,250,25,25);
	mangoes4 = new Mango(650,300,25,25);
	mangoes5 = new Mango(625,340,25,25);
	mangoes6 = new Mango(510,230,25,25);
	boy = new Boy(200,500,50,150);
	stone = new Stone(100,450,30,30);
	ground = new Ground(400,635,850,50);
	slingShot = new Slingshot(stone.body,{x: 100, y: 450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	tree.display();
	mangoes.display();
	mangoes2.display();
	mangoes3.display();
	mangoes4.display();
	mangoes5.display();
	mangoes6.display();
	boy.display();
	stone.display();
	slingShot.display();
	ground.display();

	//detectCollision(stone,mangoes);
	//detectCollision(stone,mangoes2);
	//detectCollision(stone,mangoes3);
	//detectCollision(stone,mangoes4);
	//detectCollision(stone,mangoes5);
	//detectCollision(stone,mangoes6);

  drawSprites();
 
}

//function detectCollision(Lstone,Lmangoes){
//	mangoesBodyPosition = Lmangoes.body.position
//	stoneBodyPosition = Lstone.body.position
//
//	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoesBodyPosition.x, mangoesBodyPosition.y)
//	if(distance <- Lmangoes.r + Lstone.r){
//		Matter.Body.setStatic(Lmangoes.body,false);
//	}
//}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingShot.fly();
}