// basic things 
// works everytime ?
let scene = 0
let scroll = 0;
let scroll2 = 0
let scroll3 = 0
let scroll4 = 0
let startstarter = false
let paper = []
let paperAnimation = 0
let scrollpic
let clickpic

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

let bear = []
let bearAnimation = 0

// sixth scene 
// dog ran away omgg / scrolling
let bg2 = [];

//seventh scene
// waiting, maybe forest animation - clicking
let policemans = []
let policemananimation = 0
// eight scene
// dog came back with policeman - polaroid scrolling !!!!????
let bg3 = []

// ninth scene
// her small hands found policeman - animation clicking

let grass = []
let grassAnimation = 0


// last pic of karina in the 11th scene
let karinapic = []


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
  for (let i = 1; i <= 4; i++) {
    bg2.push(loadImage("images/06/" + i + ".png"));
  }
  for (let i = 1; i <= 9; i++) {
    bear.push(loadImage("images/05/" + i + ".png"));
  }
  for (let i = 1; i <= 4; i++) {
    bg3.push(loadImage("images/08/" + i + ".png"));
  }
  for (let i = 1; i <= 7; i++) {
    grass.push(loadImage("images/09/" + i + ".png"));
  }
  for (let i = 1; i <= 34; i++) {
    policemans.push(loadImage("images/07/" + i + ".png"));
  }
  for (let i = 1; i <= 5; i++) {
    karinapic.push(loadImage("images/10/" + i + ".png"));
  }

  // add loops later after finishing drawings !

  doggie = loadImage("images/04/1.png")

  //beomg = loadImage("images/beom.jfif")
  //karinapic = loadImage("images/10/1.png")
  backtrack = loadSound("sound/trees.mp3");
  flip = loadSound("sound/page-flip.mp3");


  scrollpic = loadImage("images/scroll.png")
  clickpic = loadImage("images/click.png")
}

function setup() {
  let canvas = createCanvas(1280, 959);
  canvas.parent("p5-canvas-container");
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

  console.log(scroll)
}

function drawtaiga() {
  background(220);

  if (scene == 0 && introAnimation < intro.length) { // && is and daiaaaaa

    image(intro[introAnimation], 0, 0);
    introAnimation = (introAnimation + 1)

  } else {


    let sceneScroll = scroll % (4 * width)
    console.log(sceneScroll)


    if (scene == 0) {
      // scene = floor(scroll / (3 * width))
      for (let i = 0; i < bg.length; i++) {
        image(bg[i], i * width - sceneScroll, 0);
        image(karina[karinaRunningFrame], 0, 0);

        if (scroll >= (bg.length - 1) * width) {
          scene = 1;
        }

        image(scrollpic, 0, 0)
      }
    } else if (scene == 1) {

      image(butterfly[butterflyAnimation], 0, 0)
      butterflyAnimation = (butterflyAnimation + 1) % butterfly.length

      image(clickpic, 0, 0)

    } else if (scene == 2) {

      image(berries[berryAnimation], 0, 0)
      berryAnimation = (berryAnimation + 1) % berries.length

      textSize(80)

      if (mouseX < width / 2) {
        text("❤", mouseX, mouseY)
      } else {
        text("✖", mouseX, mouseY)
      }

      image(clickpic, 0, 0)

    } else if (scene == 3) {
      image(doggie, 0, 0)
      image(clickpic, 0, 0)

    } else if (scene == 4) {
      //bear animation 23.04 today
      image(bear[bearAnimation], 0, 0)
      bearAnimation = (bearAnimation + 1) % bear.length

      image(clickpic, 0, 0)

    } else if (scene == 5) {

      let scene2Scroll = scroll2 % (4 * width)

      //if (scroll2 > 4000) {
      //scene = 6
      //}
      //scene = floor(scroll2 / (3 * width))


      for (let i = 0; i < bg2.length; i++) {
        image(bg2[i], i * width - scene2Scroll, 0);
      }

      if (scroll2 >= (bg2.length - 1) * width) {
        scene = 6;
      }

      image(scrollpic, 0, 0)

    } else if (scene == 6) {
      image(policemans[policemananimation], 0, 0)
      policemananimation = (policemananimation + 1) % policemans.length

      image(clickpic, 0, 0)

    } else if (scene == 7) {

      let scene3Scroll = scroll3 % (4 * width)

      // scene = floor (scroll2 / (3 * width)) 

      for (let i = 0; i < bg3.length; i++) {
        image(bg3[i], i * width - scene3Scroll, 0);
      }

      if (scroll3 >= (bg3.length - 1) * width) {
        scene = 8;
      }

      image(scrollpic, 0, 0)
    }


    else if (scene == 8) {
      image(grass[grassAnimation], 0, 0)
      grassAnimation = (grassAnimation + 1) % grass.length
      image(clickpic, 0, 0)

    }

    else if (scene == 9) {
      let scene4Scroll = scroll4 % (5 * width)

      for (let i = 0; i < karinapic.length; i++) {
        image(karinapic[i], i * width - scroll4, 0);
      }

      image(scrollpic, 0, 0)

    }

    push()
    tint(200, 100)
    image(paper[paperAnimation], 0, 0)
    paperAnimation = (paperAnimation + 1) % paper.length
    pop()

  }
}

function mouseWheel() {
  scroll += 20;

  if (scene == 5) {
    scroll2 += 20
  } else if (scene == 7) {
    scroll3 += 20
  } else if (scene == 9) {
    scroll4 += 20
  }

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
    scene = 5;
    flip.play();
  }
  else if (scene == 6) {
    scene = 7
    flip.play();

  } else if (scene == 8) {
    scene = 9
    flip.play();
  } else if (scene == 9)
    scene = 1
  scroll2 = 0
  scroll3 = 0
}
