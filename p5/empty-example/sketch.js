let count = 0;

// let toggle = true;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(1, 234, 34);

  fill(222, 33, 2);
  noStroke();
  let diameter = 25;

  for (let i = 0; i < width / diameter; i = i + 1) {
    for (let j = 0; j < height / diameter; j = j + 1) {
      ellipse(
        i * diameter + diameter / 2,
        j * diameter + diameter / 2,
        diameter,
        diameter
      );
    }
  }
}
