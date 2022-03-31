let canvas;

let scientifico;
let umanistico;

function preload() {
  s1 = loadImage("assets/copertine/small/S1.png");
  s2 = loadImage("assets/copertine/small/S2.png");
  s3 = loadImage("assets/copertine/small/S3.png");
  s4 = loadImage("assets/copertine/small/S4.png");
  s5 = loadImage("assets/copertine/small/S5.png");

  u1 = loadImage("assets/copertine/small/U1.png");
  u2 = loadImage("assets/copertine/small/U2.png");
  u3 = loadImage("assets/copertine/small/U3.png");
  u4 = loadImage("assets/copertine/small/U4.png");
  u5 = loadImage("assets/copertine/small/U5.png");

  scientifico = [s1, s2, s3, s4, s5];
  umanistico = [u1, u2, u3, u4, u5];
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas");
  background(255);
}

function draw() {
  frameRate(0.5);

  imageMode(CENTER);

  let randomXS = random(0, width / 2);
  let randomYS = random(0, height / 2);
  let randomXU = random(0, width / 2);
  let randomYU = random(0, height / 2);
  let randomS = round(random(0, 4));
  let randomU = round(random(0, 4));

  push();
  translate(width / 2, height / 2);
  rotate(random(0, 350));
  translate(randomXS, randomYS);
  image(
    scientifico[randomS],
    0,
    0,
    scientifico[randomS].width / 2,
    scientifico[randomS].height / 2
  );
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(random(0, 350));
  translate(randomXU, randomYU);
  image(umanistico[randomU], 0, 0, umanistico[randomU].width / 2, umanistico[randomU].height / 2);
  pop();
}

//
function mouseClicked() {
  background(255);
}
