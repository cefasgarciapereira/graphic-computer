const angle = 50;
const scale = 0.67;
const branch_length = 30;

function setup() {
  createCanvas(1080, 720);
}

function draw() {
  var len = 100;

  background(51);
  stroke(255);
  translate(width/2,height);
  branch(branch_length);
}

function branch(len){
  line(0, 0, 0, - len);
  translate(0,-len);
  if(len > 1){
    push();
    rotate(angle);
    branch(len*scale);
    pop();
    push();
    rotate(-angle);
    branch(len*scale);
    pop();
  }

}
