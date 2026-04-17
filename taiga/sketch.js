// basic things 
// works everytime ?
let scene = 0
let scroll = 0;
let startstarter = false
let paper = []
let paperAnimation = 0

// menu
let menu = []
let menuAnimation = 0

// maybe add a scene before running? simple animation for example
let intro = []
let introAnimation = 0

// first scene
// running in a forest / scrolling 
// make it longer and change karina's running

let karina = []
let bg = [];
let karinaRunningFrame = 0;

// second scene 
// just butterfly / animation - clicking

let butterfly = []
let butterflyAnimation = 0
let backtrack, flip;

// thrid scne 
//eating berries / eating interaction - clicking
let berries = []
let berryAnimation = 0

// fourth scene
// changing seasons and time / change the background to sunny and night
//  with lerp or mouseX and mouseY

let doggie

//fifth scene
// bear encounter animation - clickinb


// sixth scene 
// dog ran away omgg / scrolling

//seventh scene
// waiting, maybe forest animation - clicking

// eight scene
// dog came back with policeman - polaroid scrolling !!!!????

// ninth scene
// her small hands found policeman - animation clicking

// tenth scene
// yupiee aftermath - scrolling !


function preload() {

  for (let i = 1; i <= 4; i++) {
    bg.push(loadImage("images/01/background/0" + i + ".png"));
  }

  for (let i = 1; i <= 9; i++) {
    karina.push(loadImage("images/01/karina/0" + i + ".png"));
  }

  for (let i = 1; i <= 5; i++) {
    paper.push(loadImage("images/paper/0" + i + ".png"))
  }
  for (let i = 1; i <= 12; i++) {
    butterfly.push(loadImage("images/02/butterfly/" + i + ".png"))
  }
  for (let i = 1; i <= 4; i++) {
    menu.push(loadImage("images/menu/" + i + ".png"));
  }
  for (let i = 1; i <= 15; i++) {
    intro.push(loadImage("images/starting/" + i + ".png"))
  }
  for (let i = 1; i <= 3; i++) {
    berries.push(loadImage("images/03/" + i + ".png"));
  }

  // add loops later after finishing drawings !

  doggie = loadImage("images/04/1.png")

  backtrack = loadSound("sound/trees.mp3");
  flip = loadSound("sound/page-flip.mp3");
}

function setup() {
  createCanvas(1280, 959);
  frameRate(8)
  backtrack.loop();
  backtrack.setVolume(0.3);
}

function draw() {
  if (startstarter == false) {
    drawMenu();
  } else {
    drawtaiga()
  }
}

function drawtaiga() {
  background(220);

  if (scene == 0 && introAnimation < intro.length) { // && is and daiaaaaa

    image(intro[introAnimation], 0, 0);
    introAnimation = (introAnimation + 1)

  } else {

    if (scene == 0 || scene == 4) {
      scene = floor(scroll / (3 * width))
    }

    let sceneScroll = scroll % (4 * width)

    if (scene == 0) {
      for (let i = 0; i < bg.length; i++) {
        image(bg[i], i * width - sceneScroll, 0);
        image(karina[karinaRunningFrame], 0, 0);
      }
    } else if (scene == 1) {

      image(butterfly[butterflyAnimation], 0, 0)
      butterflyAnimation = (butterflyAnimation + 1) % butterfly.length

    } else if (scene == 2) {

      image(berries[berryAnimation], 0, 0)
      berryAnimation = (berryAnimation + 1) % berries.length

      textSize(80)

      if (mouseX < width / 2) {
        text("❤", mouseX, mouseY)
      } else {
        text("✖", mouseX, mouseY)
      }

    } else if (scene == 3) {
      image(doggie, 0, 0)

    } else if (scene == 4) {
      //bear

    } else if (scene == 5) {

    }

  }

  push()
  tint(200, 100)
  image(paper[paperAnimation], 0, 0)
  paperAnimation = (paperAnimation + 1) % paper.length
  pop()

}

function mouseWheel() {
  scroll += 20;

  karinaRunningFrame++;
  if (karinaRunningFrame >= karina.length) {
    karinaRunningFrame = 0;
  }
}

function drawMenu() {
  image(menu[menuAnimation], 0, 0)
  menuAnimation = (menuAnimation + 1) % menu.length
}

function mousePressed() {
  startstarter = true

  if (scene == 1) {
    scene = 2;
    flip.play();
  } else if (scene == 2) {
    scene = 3;
    flip.play();

  } else if (scene == 3) {
    scene = 4;
    flip.play();

  } else if (scene == 4) {
    flip.play
    scene = 5
  }
}