/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/

let t = 50;
let d = 5;
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  colorMode(HSB);
  // background (198, 8, 96)
}

function draw() {
  // I DONT KNOOOOOOOOOOOOO
  background(209, 16, 80);
  drawBack();
  console.log(mouseX, mouseY);
  
  push();
  translate(mouseX, mouseY);
  rotate(frameCount * 0.05);
  fill(353, 0, 100);
  noStroke();
  beginShape();
  vertex(0, 0 - 30);
  vertex(0 + 5, 0 - 5);
  vertex(0 + 30, 0);
  vertex(0 + 5, 0 + 5);
  vertex(0, 0 + 30);
  vertex(0 - 5, 0 + 5);
  vertex(0 - 30, 0);
  vertex(0 - 5, 0 - 5);
  endShape();
  pop();
  
  let noiseval = noise(frameCount * 0.003);
  let lumoAnimationX = map(noiseval, 0, 1, 100, 600);
  let lumoAnimationY = map(noiseval, 0, 1, 200, 300);
  drawLumo(lumoAnimationX, lumoAnimationY);
  // drawLumo(100, 100)
}

function drawLumo(lumoPositionX, lumoPositionY) {
  let d = dist(mouseX, mouseY, lumoPositionX, lumoPositionY);

  let sat = map(d, 0, 800, 30, 0);
  let s = lerpColor(color(331, 3, 99), color(331, 35, 97), d);

  push();
  translate(lumoPositionX, lumoPositionY);
  rotate(map(mouseX, 0, width, -0.05, 0.05));

  for (let i = 0; i < 6; i++) {
    fill(331, 20, 100, 0.06);
    noStroke();
    circle(0, 0, 120 + i * 40);
  }

  if (d < 120) {
    // angryyy
    rotate(sin(frameCount * 0.09));
    push();
    scale(1.15)
    fill(4, 7, 35);
    fill(338, 33, 77)
    noStroke();
    beginShape();
    vertex(0, 0 - 70);
    vertex(0, 0 - 150);
    vertex(0 + 40, 0 - 60);
    vertex(0 + 100, 0 - 130);
    vertex(0 + 70, 0 - 30);
    vertex(0 + 150, 0 - 70);
    vertex(0 + 80, 0);
    vertex(0 + 150, 0);
    vertex(0 + 70, 0 + 30);
    vertex(0 + 150, 0 + 70);
    vertex(0 + 40, 0 + 60);
    vertex(0 + 100, 0 + 130);
    vertex(0, 0 + 70);
    vertex(0, 0 + 150);
    vertex(0 - 40, 0 + 60);
    vertex(0 - 100, 0 + 130);
    vertex(0 - 70, 0 + 30);
    vertex(0 - 150, 0 + 70);
    vertex(0 - 80, 0);
    vertex(0 - 150, 0);
    vertex(0 - 70, 0 - 30);
    vertex(0 - 150, 0 - 70);
    vertex(0 - 40, 0 - 60);
    vertex(0 - 100, 0 - 130);
    endShape();
    pop()
    push();
    fill(338, 43, 57);
    beginShape();
    vertex(0 - 60, 0 - 50);
    vertex(0 - 10, 0 - 20);
    vertex(0 - 20, 0 - 20);
    endShape();

    beginShape();
    vertex(0 + 60, 0 - 50);
    vertex(0 + 10, 0 - 20);
    vertex(0 + 20, 0 - 20);
    endShape();
    pop();
    
    push(); // angry  > <
    fill(338, 0, 100);
    beginShape();
    vertex(-15, 40);
    vertex(0, 30);
    vertex(15, 40);
    endShape();

    push();
    fill(338, 43, 57);
    noStroke();
    beginShape();
    vertex(0 - 60, 0 - 30);
    vertex(0 - 10, 0 + 10);
    vertex(0 - 60, 0 + 20);
    vertex(0 - 40, 0);
    endShape();
    beginShape();
    vertex(0 + 60, 0 - 30);
    vertex(0 + 10, 0 + 10);
    vertex(0 + 60, 0 + 20);
    vertex(0 + 40, 0);
    endShape();
    pop();
  } else {
    // cutesyyyy

    for (let glow = 0; glow < 5; glow++) {
      fill(331, sat, 100, 0.05);
      noStroke();
      push();
      scale(1 + glow * 0.05);
      beginShape();
      curveVertex(10, 20);
      vertex(0, -95);
      vertex(-85, -33);
      vertex(-100, 65);
      vertex(-20, 100);
      vertex(90, 70);
      vertex(100, -10);
      vertex(60, -70);
      vertex(-10, -80);
      vertex(-20, -10);
      endShape();
      pop();
    }

    push();
    fill(331, sat,100,0.9);
    noStroke();
    
    ellipse(0-40,0+90, 40,50)
    ellipse(0+40,0+85, 40,50)
    beginShape();
    curveVertex(10, 20);
    vertex(0, 0 - 95);
    vertex(0 - 85, 0 - 33);
    vertex(0 - 100, 0 + 65);
    vertex(0 - 20, 0 + 100);
    vertex(0 + 90, 0 + 70);
    vertex(0 + 100, 0 - 10);
    vertex(0 + 60, 0 - 70);
    vertex(0 - 10, 0 - 80);
    vertex(0 - 20, 0 - 10);
    endShape();
    // blushing babyy
    for (let cheeky = 0; cheeky < 4; cheeky++) {
      fill(342, 37, 100, 0.06);
      noStroke();
      ellipse(-70, 40, 50 + cheeky * 15, 30 + cheeky * 10);
      ellipse(70, 40, 50 + cheeky * 15, 30 + cheeky * 10);
    }
    fill(342, 37, 94, 0.3);
    ellipse(0 - 70, 0 + 40, 50, 30);
    ellipse(0 + 70, 0 + 40, 50, 30);
    pop();

    push(); // mouth
    let mouthMove = sin(frameCount * 0.008) * 4;

    fill(342, 40, 85);
    noStroke();
    ellipse(0, 0 + 40, 10, 10 + mouthMove);
    pop();
    // eyes

    push();
    fill(338, 0, 100);
    noStroke();
    circle(0 + 40, 0, 50);
    circle(0 - 40, 0, 50);

    let eyeMouseX = mouseX - lumoPositionX;
    let eyeMouseY = mouseY - lumoPositionY;

    fill(342, 24, 89);
    // i legit gonna cry soon
    let eye1 = 0 - 40;
    let eye2 = 0 + 40;
    let eyeHeight = 0;
    circle(-40 + eyeMouseX / 30, eyeMouseY / 30, 30);
    circle(40 + eyeMouseX / 30, eyeMouseY / 30, 30);
    eye1 = 0 - 20 + mouseX / 2;
    eye2 = 0 - 40 + mouseY / 2;
    eyeHeight = 0 - 20 + mouseY / 2;
    pop();
  }
}

function drawBack() {

  for (let i = 0; i < 70; i++) {
    let x = noise(i, frameCount * 0.002) * width;
    let y = noise(i + 100, frameCount * 0.002) * height;

    fill(210, 20, 100, 0.09);
    noStroke();
    circle(x, y, 10);
  }

  let frequency = 0.006;
  let sinval = sin(frequency * frameCount) * 30;
  for (let idk = 0; idk < 9; idk++) {
    fill(216, 10, 100, 0.04);
    noStroke();
    circle(width / 2, height / 2 + sinval, 80 + idk * 40);
  }
}
