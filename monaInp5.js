function setup() {
  angleMode(DEGREES);
  rectMode(CENTER);
  createCanvas(400, 400);
  background(102,165,19);
  fill(140,94,15); // brown ground
  rect(200,370,400,200); // ground
  fill(155,211,2); // lime
  rect(200,0,400,300); // sky
  noStroke();
  fill(68,26,2); // brown hair
  rect(200,178,160,250,60); // main hair
  stroke(0);
  fill(27,68,2); // dark green
  rect(200,350,210,172,40); // shirt
  fill(249,246,172); // skin
  rect(200,310,150,100, 40); // chest
  noStroke();
  fill(68,26,2); // brown hair
  arc(140,195,50,250,90,270); // L hair strand
  fill(249,246,172); // skin
  rect(200,240,85,100,30); // neck
  stroke(0);
  ellipse(200,150,150,175); // head
  arc(190,170,20,15,90,270); // nose
  fill(255);
  ellipse(170,140,25,15); // L eye whites
  ellipse(220,140,25,15); // R eye whites
  fill(0);
  ellipse(175,140,10,10); // L pupil
  ellipse(225,140,10,10); // R pupil
  fill(255,174,127);
  arc(194,194,40,20,0,180); // bottom lip
  arc(184,194,20,10,180,360); // L upper lip
  arc(204,194,20,10,180,360); // R upper lip
  line(180,197,210,197); // lip line
  noStroke();
  fill(68,26,2); // brown hair
  arc(259,195,60,250,270,90); // R hair strand  
}