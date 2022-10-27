let words = ['I', 'love', 'programming', 'with', 'JavaScript'];
let colors = [
  [240, 255, 66],
  [130, 205, 71],
  [84, 180, 53],
  [55, 146, 55],
  [155, 56, 155],
];

function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  frameRate(1);
}

function draw() {
  let currentIndex = frameCount % words.length;
  let currentColor = colors[currentIndex];
  let currentWord = words[currentIndex];
  background(currentColor);

  textSize(45);
  fill(255);
  text(currentWord, width / 2, height / 2);
}
