const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope
var platform;
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
platform=new Ground(1000,300,500,20);


 box1=new Box(900,550,50,50)
 box2=new Box(850,550,50,50)
 box3=new Box(800,550,50,50)
 box4=new Box(750,550,50,50)
 box5=new Box(870,500,50,50)
 box6=new Box(820,500,50,50)
 box7=new Box(765,500,50,50)
 box8=new Box(850,450,50,50)
 box9=new Box(800,450,50,50)
 box10=new Box(825,400,50,50)

 box11=new Box(950,250,50,50)
 box12=new Box(1000,250,50,50)
 box13=new Box(1050,250,50,50)
 box14=new Box(1100,250,50,50)
 box15=new Box(1020,200,50,50)
box16=new Box(1070,200,50,50)
 box17=new Box(970,200,50,50)
box18=new Box(1000,150,50,50)
box19=new Box(1050,150,50,50)
 box20=new Box(1020,100,50,50)



  ball = new Ball(500, 200, 55, 55);
  rope = new Rope(ball.body, { x: 200, y: 400 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
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
 box17.display()
  box18.display()
 box19.display()
  box20.display()
  
platform.display();
  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


function mouseReleased(){
  rope.fly();
}


//function keyPressed(){
 // if(keyCode===32){
  //  rope.attach(this.ball)
 // }
//}