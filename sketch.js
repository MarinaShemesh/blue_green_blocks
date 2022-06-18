console.log('EdX - week 5');

let space = 50;
let blockColor;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
  textAlign(CENTER);
  frameRate(1);
  rectPosX = 0;
  rectPosY = height/2;
}




function draw(){
//console.log(randomBool());


if (randomBool() === true){
rectPosX += space;
rectPosY += space;
blockColor = color(0,0,255);
}else{
  rectPosY -= space;
blockColor = color(148,186,247);
} 
strokeWeight(3);
fill(blockColor);
rect(rectPosX, rectPosY, space,space);
}

function randomBool(){
 
  let randomNum = Math.round(random(1));
  let isTrue = true;
  if(randomNum === 1){
   isTrue = true;
  }
     else{
       isTrue = false;
     }

     return isTrue;
   }
  

  



