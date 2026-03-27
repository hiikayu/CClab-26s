/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new daiadancer(width/2, height/2);

  angleMode(DEGREES)

}

function draw() {
  background(0);
  drawFloor();

  dancer.update();
  dancer.display();
}


class daiadancer {

  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.offset = 0;
    this.cinabounceX = 0;
    this.cinabounceY = 0;
    this.tilt = 0;
    this.earbounce = 0;
    this.hands = 0;
  }
  update() {
    this.offset = this.offset + 3;
    let noiseval = noise(frameCount * 0.003);
    //     this.cinabounceX = map(noiseval, 0, 1, 20, 30)
    //     this.cinabounceY = map(noiseval, 0, 1, 20, 40)
    this.cinabounceX = sin(this.offset * 0.5) * 15;
    this.cinabounceY = sin(this.offset) * 10;
    this.tilt = sin(this.offset) * 0.9;

    this.earbounce = sin(this.offset * 2) * 5;
    this.hands = sin(this.offset * 2) * 10;
  }
  display() {
  push();
    translate(this.x + this.cinabounceX, this.y + this.cinabounceY);
    rotate(this.tilt);
    stroke(152, 178, 217);
    strokeWeight(4);
    fill(255);
    // lefty ear
    push();
    translate(0 - 40, 0 - 55);
    rotate(15 + this.earbounce);
    beginShape();
    curveVertex(0, 0);
    vertex(0, 0);
    vertex(0 - 14, 0 + 17);
    vertex(0 - 35, 0 + 72);
    vertex(0 - 28, 0 + 127);
    vertex(0 - 6, 0 + 122);
    vertex(0 + 10, 0 + 62);
    vertex(0, 0);
    vertex(0, 0);
    endShape();
    pop();

    // rightyy
    push();
    translate(0 + 40, 0 - 55);
    rotate(-15 - this.earbounce);
    beginShape();
    curveVertex(0, 0);
    vertex(0, 0);
    vertex(0 + 14, 0 + 17);
    vertex(0 + 35, 0 + 72);
    vertex(0 + 28, 0 + 127);
    vertex(0 + 6, 0 + 122);
    vertex(0 - 10, 0 + 62)
    vertex(0, 0);
    vertex(0, 0);
    endShape();
    pop();

    beginShape();
    curveVertex(0 - 16, 0 + 10);
    vertex(0 - 16, 0 + 10);
    vertex(0 - 28, 0 + 32);
    vertex(0 - 24, 0 + 60);
    vertex(0 - 17, 0 + 78);
    vertex(0 - 5, 0 + 70);
    vertex(0 + 5, 0 + 70);
    vertex(0 + 17, 0 + 78);
    vertex(0 + 24, 0 + 60);
    vertex(0 + 28, 0 + 32);
    vertex(0 + 16, 0 + 10);
    vertex(0 - 16, 0 + 10);
    vertex(0 - 16, 0 + 10);
    endShape();

    ellipse(0, 0 - 25, 133, 90);

    stroke(152, 178, 217);
    strokeWeight(4);
    circle(0 - 25, 0 + 30 + this.hands, 30);
    circle(0 + 25, 0 + 30 - this.hands, 30);

    // face
    noStroke();
    fill(180, 211, 240);
    ellipse(0 - 33, 0 - 22, 20, 25);
    ellipse(0 + 33, 0 - 22, 20, 25);

    fill(250, 197, 201);
    ellipse(0 - 38, 0, 30, 20);
    ellipse(0 + 38, 0, 30, 20);

    noFill();
    stroke(135, 149, 201);
    strokeWeight(3);
    arc(0 - 4, 0 - 5, 8, 6, 0, 180);
    arc(0 + 4, 0 - 5, 8, 6, 0, 180);

  }


}
