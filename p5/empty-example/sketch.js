let words = ['I', 'love', 'programming', 'with', 'JavaScript'];

let sizes = [];

function setup() {
  createCanvas(800, 300);
  for (let i = 0; i < 100; i++) {
    let randomValue = random(5, 500);
    sizes.push(randomValue);
  }
  textAlign(CENTER, CENTER)
}

function draw() {
  background(200);

  
  // noFill();
  // strokeWeight(2);
  // for (let i = 0; i < sizes.length; i++) {
  //   ellipse(width / 2, height / 2, sizes[i], sizes[i]);
  // }
  textSize(45)
  fill(255);
  text('JavaScript', width / 2, height / 2)
}
