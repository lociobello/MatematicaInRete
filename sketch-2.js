let canvas;

let scientifico;
let umanistico;
let pagine;

function preload() {
  s1 = loadImage("assets/copertine/nuove/low-res/S1.png");
  s2 = loadImage("assets/copertine/nuove/low-res/S2.png");
  s3 = loadImage("assets/copertine/nuove/low-res/S3.png");
  s4 = loadImage("assets/copertine/nuove/low-res/S4.png");
  s5 = loadImage("assets/copertine/nuove/low-res/S5.png");

  u1 = loadImage("assets/copertine/nuove/low-res/U1.png");
  u2 = loadImage("assets/copertine/nuove/low-res/U2.png");
  u3 = loadImage("assets/copertine/nuove/low-res/U3.png");
  u4 = loadImage("assets/copertine/nuove/low-res/U4.png");
  u5 = loadImage("assets/copertine/nuove/low-res/U5.png");

  pag1 = loadImage("assets/pagine/low-res/pag1.png");
  pag2 = loadImage("assets/pagine/low-res/pag2.png");
  pag3 = loadImage("assets/pagine/low-res/pag3.png");
  pag4 = loadImage("assets/pagine/low-res/pag4.png");
  pag5 = loadImage("assets/pagine/low-res/pag5.png");
  pag6 = loadImage("assets/pagine/low-res/pag6.png");

  scientifico = [s1, s2, s3, s4, s5];
  umanistico = [u1, u2, u3, u4, u5];
  pagine = [pag1, pag2, pag3, pag4, pag5, pag6];
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

  let randomXPag = random(0, width / 2);
  let randomYPag = random(0, height / 2);

  let randomS = round(random(0, 4));
  let randomU = round(random(0, 4));
  let randomPag = round(random(0, 5));

  push();
  translate(width / 2, height / 2);
  rotate(random(0, 350));
  translate(randomXS, randomYS);
  image(
    scientifico[randomS],
    0,
    0,
    scientifico[randomS].width / 1.6,
    scientifico[randomS].height / 1.6
  );
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(random(0, 350));
  translate(randomXU, randomYU);
  image(
    umanistico[randomU],
    0,
    0,
    umanistico[randomU].width / 1.6,
    umanistico[randomU].height / 1.6
  );
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(random(0, 350));
  translate(randomXPag, randomYPag);
  image(pagine[randomPag], 0, 0, pagine[randomPag].width / 1.6, pagine[randomPag].height / 1.6);
}

function mouseClicked() {
  background(255);
}
