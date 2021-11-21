const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[];


//Arrays explanation for reference

//var asdfhg = 10; //integer
//var gamestate ='A';//string

// arrays
// var myList = [10,10,40,50,607];// array index
//var myArr =[]

// console.log(myList[2]);// 40 on the screen

// myList.push(89);//10,10,40,50,607,89 //push adds element to the end of the array

//  0     1     2     3    4     5      6
// var daysOfWeek= ['mon','tue','wed','thu','fri']//elements of array

// console.log(daysOfWeek[3]);//accessing array items/elements

// daysofWeek.pop();//to remove elements from the end of the array
// daysofWeek.pop();


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
 

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();

  
  for(var i=0 ; i< balls.length ; i++){

    showCannonBall(balls[i],i);//1 2 3 4

  }

 
}



function showCannonBall(ball,index){

    ball.display();

  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    Matter.World.remove(world, ball.body);
    balls.splice(index, 1);
  }

}

function keyPressed(){
  if (keyCode === DOWN_ARROW) {
    cannonBall = new CannonBall(cannon.x, cannon.y);//                              
    
    balls.push(cannonBall);//balls[1,2,3,4,...10...50] , index 0-49
  }

}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot(); //balls[3]
    //balls[3]
  }
}
