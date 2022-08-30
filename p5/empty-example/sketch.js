let count = 0;

// let toggle = true;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  // frameRate(1);
}

function draw() {
  background(0, 0, 0);

  fill(237, 34, 93);
  noStroke();
  let diameter = 50;

  for (let i = 0; i < width / diameter; i = i + 1) {
    for (let j = 0; j < height / diameter; j = j + 1) {
      ellipse(
        diameter / 2 + i * diameter,
        diameter /2 + j * diameter,
        diameter * noise(frameCount / 100 + i + j),
        diameter * noise(frameCount / 50 + i + j)
      )
    }
  }
}
