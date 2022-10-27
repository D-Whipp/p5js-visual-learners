let sizes = [200, 150, 100, 50, 25];

function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(220);

  fill(237, 231, 4);
  strokeWeight(2);

  for (let i = 0; i < 5; i++) {
    ellipse(width / 2, height / 2, sizes[i], sizes[i]);
  }
}
