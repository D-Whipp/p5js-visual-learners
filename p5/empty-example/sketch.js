let count = 0;

function setup() {
  let canvasWidth = 800;
  let canvasHeight = 400;

  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

function draw() {
  let canvasWidth = 800;
  let canvasHeight = 400;

  background(1, 185, 244);
  let x = count / 2;
  let y = canvasHeight / 2;
  let size = 200 + count;

  // circle
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, size, size);

  // rectangle
  fill(225);
  rect(x, y, 150, 30);

  count = count + 1;
}
