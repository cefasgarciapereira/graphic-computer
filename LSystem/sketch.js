// Alphabet A,B
// Rules: (A -> AB), (B -> A)

// variables: F+-[]
// axiom: F
// rules F -> FF+[+F-F-F]-[-F+F+F]

var axiom = "F";
var sentence = "F";
var rules = [];
var len = 220;
var angle;
var strokeSetup = [255,100];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate(){
  if(len > 20){
    var nextSentence = "";
    for(var i = 0; i < sentence.length; i++){
      for(var j = 0; j<rules.length;j++){
        if(sentence.charAt(i) == rules[j].a){
          nextSentence = nextSentence + rules[j].b;
        }else{
          nextSentence = nextSentence + sentence.charAt(i);
        }
      }
    }
    sentence = nextSentence;
    console.log("call");
    len = len*0.5
    turtle();
    generate();
  }else{
    return 0;
  }
}

function turtle(){
  background(51);
  resetMatrix();
  stroke(strokeSetup);
  translate(width/2,height);
  for(var i = 0; i < sentence.length; i++){
    switch(sentence.charAt(i)){
      case "F":
        line(0,0,0, -len);
        translate(0,-len);
      break;
      case "+":
        rotate(angle);
      break;
      case "-":
        rotate(-angle);
      break;
      case "[":
        push();
      break;
      case "]":
        pop();
      break;
      default:
      break;
    }
  }
  console.log(sentence);
}

function setup() {
  createCanvas(1000,800);
  background(51);
  angle = radians(25)
  generate();
}
