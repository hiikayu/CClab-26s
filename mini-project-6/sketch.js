let maris = [];
let mariAnimation = 0
let flowers = [];
let papers = []
let lamp = []
let forget = []
let eyes = []
let watermelons = []
let polaroid = []
let stairs = []
let doubts = []

let pics = [];
let picsAnimation = 0 // out of pictures nexttt
let index = 0

// try to make atext before mari animation pleaseplease

let textidk = true

function preload() {
 for (let i=1; i <=4; i++) {
  maris.push(loadImage("images/mari/0"+i+".png"))
 }

 for (let i=1; i <= 3; i++){
  flowers.push(loadImage("images/flower/0" + i + ".png"))  // change to the drawing
 }

  for (let i=1; i <= 3; i++){
  papers.push(loadImage("images/paper/0" + i + ".png"))
 }

   for (let i=1; i <= 3; i++){
  lamp.push(loadImage("images/lamp/0" + i + ".png"))
 }

 for (let i=1; i <= 4; i++){
  forget.push(loadImage("images/text/0" + i + ".png")) // this is text at the beginning
 }

  for (let i=1; i <= 8; i++){
  eyes.push(loadImage("images/eye/0" + i + ".png")) 
 }

  for (let i=1; i <= 4; i++){
  watermelons.push(loadImage("images/watermelon/0" + i + ".png")) 
 }

   for (let i=1; i <= 2; i++){
  polaroid.push(loadImage("images/polaroid/0" + i + ".png")) 
 }

  for (let i=1; i <= 4; i++){
  stairs.push(loadImage("images/stairs/0" + i + ".png")) 
 }

  for (let i=1; i <= 3; i++){
  doubts.push(loadImage("images/doubt/0" + i + ".png")) 
 }

 pics.push(forget)
 pics.push(flowers)
 pics.push(papers)
 pics.push(watermelons)
 pics.push(lamp)
 pics.push(eyes)
 pics.push(polaroid)
 pics.push(doubts)
 pics.push(stairs)

 backtrack = loadSound("sound/trees.mp3") // copyrighted.....
 flip = loadSound("sound/page-flip.mp3")
}

function setup() {
  createCanvas(400, 400);
  frameRate(5)
  backtrack.loop()
  backtrack.setVolume(0.3)
}

function draw() {
  background(220);
  image(maris[mariAnimation], 0, 0)
  mariAnimation = (mariAnimation + 1) % maris.length


  // DONT make someyhing stupid
  // index part

  // let indexAnimation = picsAnimation[index]
  // image(indexAnimation)


  // so index is chosinig between all of pushes 

  let chosenpicAnimation = pics[index] 
  image(chosenpicAnimation[picsAnimation],0,0)
  picsAnimation = (picsAnimation + 1) % chosenpicAnimation.length

}

function mousePressed(){

 // if (mouseIsPressed) {
//    textidk = false
//  }

 // if (textidk = false) {

  //}

 flip.play()
 index = (index + 1) % pics.length
 picsAnimation = 0
} 