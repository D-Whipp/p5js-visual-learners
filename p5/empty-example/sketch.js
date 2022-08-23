function setup() {
  createCanvas(400, 400);
  // console.log('setup');
}

function draw() {
  background(220);
  // circle one
  fill(255, 0, 0);
  ellipse(200, 200, 100, 100);
  fill(111, 211, 1);
  ellipse(200, 200, 90, 90);
  // circle two
  fill(0, 244, 0);
  ellipse(100, 100, 100, 100);
  fill(111, 1, 211);
  ellipse(100, 100, 90, 90);
  // circle three
  fill(0, 0, 255);
  ellipse(300, 300, 100, 100);
  fill(1, 211, 111);
  // noFill();
  stroke(0);
  ellipse(300, 300, 90, 90);
}
