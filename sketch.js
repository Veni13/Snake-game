
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var snake;
var food;


function setup(){
var canvas = createCanvas(400,400);
engine  = Engine.create();
world = engine.world;
snake = new Snake(200,200,30,30);
food = new Food(300,200,50,50);
}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    snake.display();
    food.display();
}