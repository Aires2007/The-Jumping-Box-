var canvas;
var music;
var bluebox;
var greenbox;
var yellowbox;
var redbox;
var mainguy;
var leftedge;
var rightedge;
var topedge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){

    canvas = createCanvas(800,600);

 bluebox = createSprite(117,570,175,30);
 bluebox.shapeColor="blue";

 greenbox = createSprite(302,570,175,30);
 greenbox.shapeColor="green"; 

 yellowbox = createSprite(487,570,175,30);
 yellowbox.shapeColor="yellow";

 redbox = createSprite(672,570,175,30);
 redbox.shapeColor="red"; 

 leftedge = createSprite(0,300,10,600);
 rightedge = createSprite(800,300,10,600);
 topedge = createSprite(400,0,800,10);

 
 mainguy = createSprite(400,100,50,50);
 mainguy.shapeColor="white";
 mainguy.velocityX=8;
 mainguy.velocityY=5;
  



}

function draw() {    
    background(rgb(169,169,169));
   
mainguy.bounceOff(rightedge);
mainguy.bounceOff(leftedge);
mainguy.bounceOff(topedge);

if(mainguy.isTouching(bluebox) && mainguy.bounceOff(bluebox)){
    mainguy.shapeColor="blue"
}

if(mainguy.isTouching(greenbox) && mainguy.bounceOff(greenbox)){
    mainguy.shapeColor="green"
}

if(mainguy.isTouching(redbox) && mainguy.bounceOff(redbox)){
    mainguy.shapeColor="red"
}

if(mainguy.isTouching(yellowbox) && mainguy.bounceOff(yellowbox)){ 
    mainguy.shapeColor="yellow" 
}



        



drawSprites();
}
