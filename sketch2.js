let highVal = 255;
let zeroVal = 0;
let reverse = 0;

function setup() {
  angleMode(DEGREES);
  rectMode(CENTER);
  createCanvas(400, 400);
  frameRate(50); 
}

function draw() {
  sunsetSunrise();
  drawHamster();
}

function sunsetSunrise() {
  if(highVal < 0) { reverse = 1; }
  if(highVal > 255) { reverse = 0; }
  if(reverse == 0) {
    highVal = highVal - 1;
    zeroVal = zeroVal + 1;
  }
  if(reverse == 1) {
    highVal = highVal + 1;
    zeroVal = zeroVal - 1;
  }
  c3 = color(highVal, 0, zeroVal); // red to blue
  c4 = color(0, 0, highVal) // blue to black
  setGradient(0, 0, 400, 400, c4, c3);
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
 
  // Top to bottom gradient
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function drawHamster() {
  noStroke();
  fill(254,203,89); // golden
  circle(120,100,100); // L ear
  circle(270,100,100); // R ear
  ellipse(193,370,270,420); // body
  fill(232,91,112); // pink
  circle(120,105,75); // L inner ear
  circle(270,105,75); // R inner ear
  fill(255,232,185); // cream
  ellipse(140,205,120,120); // L cheek
  ellipse(248,205,120,120); // R cheek
  ellipse(193,390,150,200); // belly
  fill(254,203,89); // golden
  circle(193,160,170); // head
  fill(0); // black
  rect(158,165,25,38,20); // R eye
  rect(232,165,25,38,20); // L eye
  fill(255,232,185); // cream
  rect(194,230,170,70,40); // upper chin
  ellipse(194,230,120,90); // chin
  fill(232,91,112); // pink
  quad(175,200,215,200,195,226,195,226); // nose
  noFill();
  stroke(192,105,83); // brown
  strokeWeight(10)
  arc(145,245,60,60,210,320) // whisker
  arc(145,260,60,60,205,305) // whisker
  arc(240,245,60,60,230,330) // whisker
  arc(235,260,60,60,250,340) // whisker
}