function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    frameRate(5); 
    createCanvas(400, 400);
    background(220);
    noStroke();
    fill(230, 76, 96) // leg red
    ellipse(155, 250, 90, 150) // L leg
    fill(242,192,210); // Kirby pink
    circle(200,200,200) // body
    ellipse(250,210,150,80) // R arm
    fill(230, 76, 96) // leg red
    ellipse(250, 250, 90, 150) // R leg
    fill(242,192,210); // Kirby pink
    ellipse(155,140,80,150) // L arm
    fill(0);
    ellipse(200,140,15,30) // L eye black
    ellipse(230,140,15,30) // R eye black
    fill(255);
    ellipse(200,133,10,10) // L eye highlight
    ellipse(230,133,10,10) // R eye highlight
    fill(43,93,236);
    arc(200,144,9,20,360,180) // L iris
    arc(230,144,9,20,360,180) // R iris
  }