const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3, box4, box5 ,box6,box7,box8,box9,box10,box12,box13,box14,box15,box16;
var box17, box18, box19, box20, box21 ,box22;
var ground1,ground2;
var Stone1;
var rope1;
var score;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;
	score=0;
	//Create the Bodies Here.
	ground2= new Ground(500,595,1000,10)
	//tower{
		ground1	= new Ground(500,400,400,10)
		//level1
		box1= new Box(500,390,50,60)
		box2= new Box(450,390,50,60)
		box3= new Box(400,390,50,60)
		box4= new Box(350,390,50,60)
		box5= new Box(550,390,50,60)
		box6= new Box(600,390,50,60)
		box7= new Box(650,390,50,60)
		//level2
		box8= new Box(500,360,50,60)
		box9= new Box(450,360,50,60)
		box10= new Box(550,360,50,60)
		box11= new Box(600,360,50,60)
		box12= new Box(400,360,50,60)
		//level3
		box13= new Box(500,330,50,60)
		box14= new Box(450,330,50,60)
		box15= new Box(550,330,50,60)
		//level4
		box16= new Box(500,300,50,60)
	//}
text("SCORE : "+score,750,50)
Stone1=new stone(200,300,60,60)
keyPressed()
rope1=new Rope (Stone1.body,{x:200,y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display()
  ground2.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  Stone1.display()

  if(Box.body.speed<3){
	  score=score+1;
  }
	

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(Stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.fly()
}
function keyPressed(){
	if(keyCode==32) {
		
		rope1.attach(Stone1);
	} 
  }

