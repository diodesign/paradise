var dotStep = 6;
var dotRate = 8;

var lines = [];
var bannerHeight = 0;

class Line {
  constructor(y) {
    this.y = y;
  }
  
  draw() {
    let step = frameCount * dotRate;
    
    for (let x = 0; x < width; x = x + dotStep) {
      let strength = 100;
      let topHue = (x/1.5 + step) % 360;
      let bottomHue = abs(x/1.5 - step) % 360;
      
      fill(topHue, 100, strength);
      rect(x, this.y, dotStep, dotStep);
      
      fill(bottomHue, 100, strength, 0.7)
      rect(x, this.y + dotStep * 0.4, dotStep);
    }
  }
}

function setup() {
  createCanvas(800, 600, WEBGL);
  background(0);
  stroke(0);
  strokeWeight(0);
  colorMode(HSB);
  
  bannerHeight = height / 6;
  
  lines.push(new Line(bannerHeight));
  lines.push(new Line(height - bannerHeight));
}

function draw() {
  background(0, 0, 10);
  push();
  translate(-width / 2, -height / 2);
  strokeWeight(0);
  
  fill(200, 80, 20);
  rect(0, 0, width, bannerHeight);
  rect(0, height - bannerHeight, width, bannerHeight);
  
  for (const l of lines) {
    l.draw();
  }
  pop();
  
  lights();
  fill(260, 100, 100);
  rotateY(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  box(width / 2.75);
}