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
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas");
}

function draw() {
  frameRate(0.2);
  background(255);

  imageMode(CENTER);

  for (let i = 0; i < scientifico.length; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(random(0, 350));
    translate(random(0, width / 2), random(0, height / 2));
    image(scientifico[i], 0, 0, scientifico[i].width / 2, scientifico[i].height / 2);
    pop();
  }

  for (let i = 0; i < umanistico.length; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(random(0, 350));
    translate(random(0, width / 2), random(0, height / 2));
    image(umanistico[i], 0, 0, umanistico[i].width / 2, umanistico[i].height / 2);
    pop();
  }
}
