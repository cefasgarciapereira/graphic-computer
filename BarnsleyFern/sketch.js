var x = 0;
var y = 0;

function setup() {
  createCanvas(1920,1080);
  background(0);
  fullscreen(true);
}

function draw() {
  drawPoint();
  nextPoint();
}

function drawPoint(){
  stroke(255,255, 255);
  var px = map(x,-2.1820,4,0,width);
  var py = map(y,0,9.9983,height,0);
  ellipse(px,py,1,1);
}

function nextPoint(){
  var nextX;
  var nextY;
  var r = random(1);

  if(r<0.01){
    //1
    nextX = 0;
    nextY = 0.16 * y;
  }else if(r<0.86){
    //2
    nextX =  0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  }else if(r<0.93){
    //3
    nextX =  0.20 * x + -0.26 * y;
    nextY =  0.23 * x +  0.22 * y + 1.6;
  }else{
    //4
    nextX =  -0.15 * x + 0.28 * y;
    nextY =   0.26 * x + 0.24 * y + 0.44;
  }

  x = nextX;
  y = nextY;
}
