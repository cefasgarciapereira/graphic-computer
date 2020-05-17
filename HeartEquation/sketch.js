let i = 0;
let arr = [];
let a = 0;

function setup() {
    createCanvas(400,400);
    stroke('white');
    strokeWeight(6);    
}

function draw() {
    translate(width/2, height/2);

    fill('#04979F');
    stroke('#04979F');
    beginShape();
    if(a < 2*Math.PI){
        let r = 10;
        heart(a, r);
        a+=0.01
    }
    endShape(CLOSE);
}

function heart(a,r){
    let x = r * 16*Math.pow(Math.sin(a), 3);
    let y = -r * (13 * Math.cos(a) - 5*Math.cos(2*a) - 2*Math.cos(3*a) - Math.cos(4*a));
    return vertex(x,y);
}