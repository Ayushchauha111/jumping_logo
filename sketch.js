let x;
let y;
let xspeed;
let yspeed;
let photo;
let r,g,b;
function pickcolour()
{
  r=random(100,256);
  g=random(100,256);
  b=random(100,256);
};

function preload()
{photo=loadImage("I-Love-You-Typography-Black-And-White.png");}


function setup() {
  createCanvas(400,600);
  x=random(width);
  y=random(height);  
  xspeed=10;
  yspeed=5;
  pickcolour();
 
}

function draw() {
  background(0);
  tint(r,g,b);
  //rect(x,y,50,60);
  image(photo,x,y,50,60);
  x=x+xspeed;
  y=y+yspeed;
  if(x+ 50>=width)
  {
    xspeed=-xspeed;
    pickcolour();
    x=width-50;}
  else if(x<=0)
  {xspeed=-xspeed;
   pickcolour();
   x=0;}

   
  if(y+60>=height)
  { yspeed=-yspeed;
   pickcolour();
  y=height-60;}
 else if(y<=0)
   {yspeed=-yspeed;
    pickcolour();
      y=0;
     }
  
}