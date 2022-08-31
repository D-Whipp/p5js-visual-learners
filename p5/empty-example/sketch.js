let count = 0;

// let toggle = true;

function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(0, 0, 0);
  let x = squared(64);
  console.log(x);
}

function squared(num) {
  let result = num * num;
  fill(234, 200, 23);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(result, width / 2, height / 2);

  return result;
}
