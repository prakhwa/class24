
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer ,stone,rubber,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand7,sand8,sand9,sand10,
sand11,sand12,sand13,sand14,sand15,sand16,sand17,sand18,ground;
function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	hammer=new Hammer (100,100)
	stone=new Stone(600,450,100,100)
	rubber=new Rubber(600,100,50,50)
	sand1= new Sand(600,490,10,10)
	sand2= new Sand(600,491,10,10)
	sand3= new Sand(600,492,10,10)
	sand4= new Sand(600,493,10,10)
	sand5= new Sand(600,494,10,10)
	sand6= new Sand(600,495,10,10)
	sand7= new Sand(600,496,10,10)
	sand8= new Sand(600,497,10,10)
	sand9= new Sand(600,498,10,10)
	sand10= new Sand(600,499,10,10)
	sand11= new Sand(600,500,10,10)
	sand12= new Sand(600,501,10,10)
	sand13= new Sand(600,502,10,10)
	sand14= new Sand(600,503,10,10)
	sand15= new Sand(600,504,10,10)
	sand16= new Sand(600,505,10,10)
	sand17= new Sand(600,506,10,10)
	sand18= new Sand(600,507,10,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display();
ground.display();
stone.display();
rubber.display();
sand1.diplay();
sand2.diplay();
sand3.diplay();
sand4.diplay();
sand5.diplay();
sand6.diplay();
sand7.diplay();
sand8.diplay();
sand9.diplay();
sand10.diplay();
sand11.diplay();
sand12.diplay();
sand13.diplay();
sand14.diplay();
sand15.diplay();
sand16.diplay();
sand17.diplay();
sand18.diplay();
}



