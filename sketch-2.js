// let canvas;

// let scientifico;
// let umanistico;

// function preload() {
//   a1 = loadImage("assets/scribbles/ar1.png");
//   a2 = loadImage("assets/scribbles/ar2.png");
//   a3 = loadImage("assets/scribbles/ar3.png");

//   b1 = loadImage("assets/scribbles/blu1.png");
//   b2 = loadImage("assets/scribbles/blu2.png");
//   b3 = loadImage("assets/scribbles/blu3.png");

//   scribbles = [a1, a2, a3, b1, b2, b3];
// }

// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight * 0.6);
//   canvas.parent("canvas");
//   // background(255);
// }

// function draw() {
//   frameRate(1);

//   blendMode(MULTIPLY);
//   imageMode(CENTER);

//   let randomX = random(0, width);
//   let randomY = random(0, height);
//   let randomScribble = round(random(0, 5));
//   let randomRotation = random(-PI / 6, PI / 6);

//   push();
//   translate(randomX, randomY);
//   rotate(randomRotation);
//   image(scribbles[randomScribble], 0, 0, scribbles[randomScribble].width, scribbles[randomScribble].height);
//   pop();
// }

// function mouseClicked() {
//   background(255);
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight * 0.6);
// }

//----------------RANDOM SCRIBBLE

// let canvas;
// let scientifico;
// let umanistico;

// let scribblesArray = [];
// let displayTime = 10000; // 10 seconds in milliseconds

// function preload() {
//   a1 = loadImage("assets/scribbles_mamma_small/ar1.png");
//   a2 = loadImage("assets/scribbles_mamma_small/ar2.png");
//   a3 = loadImage("assets/scribbles_mamma_small/ar3.png");
//   a4 = loadImage("assets/scribbles_mamma_small/ar4.png");
//   a5 = loadImage("assets/scribbles_mamma_small/ar5.png");
//   a6 = loadImage("assets/scribbles_mamma_small/ar6.png");

//   b1 = loadImage("assets/scribbles_mamma_small/blu1.png");
//   b2 = loadImage("assets/scribbles_mamma_small/blu2.png");
//   b3 = loadImage("assets/scribbles_mamma_small/blu3.png");
//   b4 = loadImage("assets/scribbles_mamma_small/blu4.png");
//   b5 = loadImage("assets/scribbles_mamma_small/blu5.png");

//   scribbles = [a1, a2, a3, a4, a5, a6, b1, b2, b3, b4, b5];
// }

// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight * 0.6);
//   canvas.parent("canvas");
// }

// function draw() {
//   background(255); // Clear the background

//   let currentTime = millis();

//   // blendMode(MULTIPLY); // Apply multiply for the images
//   imageMode(CENTER);

//   // Add a new scribble with random properties each second
//   if (frameCount % 60 == 0) {
//     let randomScribble = round(random(0, 10));
//     let randomRotation = random(-PI / 6, PI / 6);
//     let position = getRandomNonOverlappingPosition(scribbles[randomScribble].width / 2, scribbles[randomScribble].height / 2);

//     if (position) {
//       scribblesArray.push({
//         img: scribbles[randomScribble],
//         x: position.x,
//         y: position.y,
//         rotation: randomRotation,
//         timestamp: currentTime,
//       });
//     }
//   }

//   // Loop through the array and display each scribble if it is less than 10 seconds old
//   for (let i = scribblesArray.length - 1; i >= 0; i--) {
//     let scribble = scribblesArray[i];

//     // Check if 10 seconds have passed
//     if (currentTime - scribble.timestamp > displayTime) {
//       scribblesArray.splice(i, 1); // Remove old scribble
//     } else {
//       push();
//       translate(scribble.x, scribble.y);
//       rotate(scribble.rotation);
//       image(scribble.img, 0, 0, scribble.img.width / 2, scribble.img.height / 2);
//       pop();
//     }
//   }
// }

// function getRandomNonOverlappingPosition(scribbleWidth, scribbleHeight) {
//   let maxAttempts = 100;
//   for (let i = 0; i < maxAttempts; i++) {
//     let randomX = random(0 + scribbleWidth / 2, width - scribbleWidth / 2);
//     let randomY = random(0 + scribbleHeight / 2, height - scribbleHeight / 2);

//     let isOverlapping = false;
//     for (let scribble of scribblesArray) {
//       let distance = dist(randomX, randomY, scribble.x, scribble.y);
//       let minDistance = (scribbleWidth + scribble.img.width / 2) / 2; // Minimum distance between the centers of images

//       if (distance < minDistance) {
//         isOverlapping = true;
//         break;
//       }
//     }

//     if (!isOverlapping) {
//       return { x: randomX, y: randomY };
//     }
//   }

//   return null; // No valid non-overlapping position found after max attempts
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight * 0.6);
// }

//----------------IN ORDINE SCRIBBLE

let canvas;
let scientifico;
let umanistico;

let scribblesArray = [];
let displayTime = 20000; // 10 seconds in milliseconds
let currentScribbleIndex = 0; // To track the current index of the scribbles array

function preload() {
  a1 = loadImage("assets/scribbles_mamma_small/ar1.png");
  a2 = loadImage("assets/scribbles_mamma_small/ar2.png");
  a3 = loadImage("assets/scribbles_mamma_small/ar3.png");
  a4 = loadImage("assets/scribbles_mamma_small/ar4.png");
  a5 = loadImage("assets/scribbles_mamma_small/ar5.png");
  a6 = loadImage("assets/scribbles_mamma_small/ar6.png");

  b1 = loadImage("assets/scribbles_mamma_small/blu1.png");
  b2 = loadImage("assets/scribbles_mamma_small/blu2.png");
  b3 = loadImage("assets/scribbles_mamma_small/blu3.png");
  b4 = loadImage("assets/scribbles_mamma_small/blu4.png");
  b5 = loadImage("assets/scribbles_mamma_small/blu5.png");

  scribbles = [a1, b1, b2, a2, a3, b3, a4, b4, a5, b5, a6];
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 0.8);
  canvas.parent("canvas");
}

function draw() {
  background(255); // Clear the background

  let currentTime = millis();

  imageMode(CENTER);

  // Add a new scribble with random properties each second
  if (frameCount % 120 == 0) {
    let randomRotation = random(-PI / 6, PI / 6);
    let position = getRandomNonOverlappingPosition(scribbles[currentScribbleIndex].width / 2, scribbles[currentScribbleIndex].height / 2);

    if (position) {
      scribblesArray.push({
        img: scribbles[currentScribbleIndex],
        x: position.x,
        y: position.y,
        rotation: randomRotation,
        timestamp: currentTime,
      });

      // Increment the index to pick the next image in the array
      currentScribbleIndex++;

      // Reset the index if it exceeds the array length
      if (currentScribbleIndex >= scribbles.length) {
        currentScribbleIndex = 0;
      }
    }
  }

  // Loop through the array and display each scribble if it is less than 10 seconds old
  for (let i = scribblesArray.length - 1; i >= 0; i--) {
    let scribble = scribblesArray[i];

    // Check if 10 seconds have passed
    if (currentTime - scribble.timestamp > displayTime) {
      scribblesArray.splice(i, 1); // Remove old scribble
    } else {
      push();
      translate(scribble.x, scribble.y);
      rotate(scribble.rotation);
      image(scribble.img, 0, 0, scribble.img.width / 1.5, scribble.img.height / 1.5);
      pop();
    }
  }
}

function getRandomNonOverlappingPosition(scribbleWidth, scribbleHeight) {
  let maxAttempts = 100;
  for (let i = 0; i < maxAttempts; i++) {
    let randomX = random(0 + scribbleWidth / 2, width - scribbleWidth / 2);
    let randomY = random(0 + scribbleHeight / 2, height - scribbleHeight / 2);

    let isOverlapping = false;
    for (let scribble of scribblesArray) {
      let distance = dist(randomX, randomY, scribble.x, scribble.y);
      let minDistance = (scribbleWidth + scribble.img.width / 1.5) / 2; // Minimum distance between the centers of images

      if (distance < minDistance) {
        isOverlapping = true;
        break;
      }
    }

    if (!isOverlapping) {
      return { x: randomX, y: randomY };
    }
  }

  return null; // No valid non-overlapping position found after max attempts
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight * 0.6);
}
