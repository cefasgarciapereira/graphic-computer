function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  loadPixels();
  mandelbrotSet();
  updatePixels();
  noLoop();
}

function mandelbrotSet(max_iterations=100){
  for(var x = 0; x < width; x++){
    for(var y = 0; y < height; y++){

      var a = map(x, 0, width, -2.5, 2.5);
      var b = map(y, 0, height, -2.5, 2.5);

      var ca = a;
      var cb = b;

      var n = 0;

      while(n < max_iterations){
        var real = (a*a) - (b*b);
        var imaginary = 2*a*b;

        a = real + ca ;
        b = imaginary + cb;

        if(abs(a + b) > max_iterations/2){
          break;
        }
        n++;
      }

      var brightness = map(n,0,max_iterations,0,255);
      if(n === max_iterations){
        brightness = 255;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = brightness;
      pixels[pix + 1] = brightness;
      pixels[pix + 2] = brightness;
      pixels[pix + 3] = 255;

    }
  }
}