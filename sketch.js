var arr = [];
let j;
let i;

function setup() {
    createCanvas(800,400);
    strokeWeight(1);
    stroke(255);
    
    for(let i = 0; i < width; i++){
        arr.push(Math.random() * height);
    }
    j = width;
}

function draw() {
    background(52);

    if(j>0){
        for(i = 0; i < j - 1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        j--;
    }else{
        noLoop();
    }

    for(let k = 0; k<arr.length;k++){
        line(k, height, k, height-arr[k]);
    }
}