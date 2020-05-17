let points = [];
let points_in_circle = [];
let points_outside_circle = [];

function setup() {
    createCanvas(400,400);
    stroke('white');
    strokeWeight(2);
    background(51);

}

function draw() {
  //Begin scenario
  //center point
  strokeWeight(4);
  stroke('white');
  point(width/2, height/2);
  strokeWeight(2);
  //Circle and radius
  stroke('blue');
  noFill();
  ellipse(width/2,height/2, width, height);
  line(width/2, width/2, width, width/2);
  //square
  stroke('yellow');
  noFill();
  square(0,0,width);
  //End scenario

  //ranom points
  randomPoint(0, width);
  estimeatePI();
}

function randomPoint(min, max){
    let x = Math.random() * width;
    let y = Math.random() * height;
    let p = [x,y];
    points.push(p);
    distanceFromOrigin(p);
    return point(x,y);
}

function distanceFromOrigin(point){
    let originx = width/2;
    let originy = height/2;
    let x = point[0];
    let y = point[1];

    let distance = Math.sqrt( pow((x - originx),2) + pow((y - originy),2));

    if(distance < (width/2)){
        stroke('blue');
        points_in_circle.push(point);
    }
}

function estimeatePI(){
    let pi = 4*points_in_circle.length / points.length;
    console.log(pi);
    return pi;
}
