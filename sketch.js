var bg
var snow=[]
const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Body= Matter.Body
function preload(){
 
}
function setup() {
  createCanvas(1000,800);
  engine = Engine.create()
  world = engine.world
  bg=new Bg(500,300,500,300)
  Engine.run(engine)
}

function draw() {
  background(0);  
  Engine.update(engine)
  bg.display()
  if(frameCount%40===0){
    snow.push(new Snow(Math.random(0,700),30,30))
  }
  for (var j=0;j<snow.length;j++){
    snow[j].display()
  }

  if(frameCount%40===0){
    snow.push(new Snow1(150,30,30))
  }
  for (var j=0;j<snow.length;j++){
    snow[j].display()
  }

  if(frameCount%40===0){
    snow.push(new Snow2(150,30,30))
  }
  for (var j=0;j<snow.length;j++){
    snow[j].display()
  }

  if(frameCount%40===0){
    snow.push(new Snow3(150,30,30))
  }
  for (var j=0;j<snow.length;j++){
    snow[j].display()
  }

  if(frameCount%40===0){
    snow.push(new Snow4(150,30,30))
  }
  for (var j=0;j<snow.length;j++){
    snow[j].display()
  }

}