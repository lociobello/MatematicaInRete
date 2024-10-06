let canvas;

let scientifico;
let umanistico;

function preload() {
  a1 = loadImage("assets/scribbles/ar1.png");
  a2 = loadImage("assets/scribbles/ar2.png");
  a3 = loadImage("assets/scribbles/ar3.png");

  b1 = loadImage("assets/scribbles/blu1.png");
  b2 = loadImage("assets/scribbles/blu2.png");
  b3 = loadImage("assets/scribbles/blu3.png");

  scribbles = [a1, a2, a3, b1, b2, b3];
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 0.75);
  canvas.parent("canvas");
  // background(255);
}

function draw() {
  frameRate(1);

  blendMode(MULTIPLY);
  imageMode(CENTER);

  let randomX = random(0, width);
  let randomY = random(0, height);
  let randomScribble = round(random(0, 5));
  let randomRotation = random(-PI / 6, PI / 6);

  push();
  translate(randomX, randomY);
  rotate(randomRotation);
  image(scribbles[randomScribble], 0, 0, scribbles[randomScribble].width, scribbles[randomScribble].height);
  pop();
}

function mouseClicked() {
  background(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.75);
}
