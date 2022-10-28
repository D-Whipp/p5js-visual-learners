let pressed = false;
let colors = [];

function setup() {
  createCanvas(800, 500);
  background(0);
  colors = [
    [0, 46, 148],
    [8, 58, 169],
    [255, 231, 204],
    [49, 32, 224],
    [59, 154, 225],
    [33, 225, 225],
  ];
  noStroke();
}

function draw() {
  if (pressed === true) {
    let randomIndex = parseInt(random(colors.length), 10);
    let randomSize = random(200);
    fill(colors[randomIndex]);
    ellipse(random(width), random(height), randomSize, randomSize);
  }
  pressed = false;
}

function keyPressed() {
  pressed = true;
}
