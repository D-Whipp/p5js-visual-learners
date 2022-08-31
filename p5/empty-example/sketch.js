let circle;
let circle_1;
let circle_2;

function setup() {
  createCanvas(800, 300);
  circle = new Circle();
  circle_1 = new Circle();
  circle_2 = new Circle();
}

function draw() {
  background(0, 0, 0);

  circle.draw();
  circle.grow();
  circle_1.x = 150;
  circle_1.draw();
  circle_1.grow();
  circle_2.x = 550;
  circle_2.draw();
  circle_2.grow();
}

function Circle() {
  this.x = width / 2;
  this.y = height / 2;
  this.size = 50;

  this.draw = function () {
    ellipse(this.x, this.y, this.size, this.size);
  };

  this.grow = function () {
    if (this.size < 200) {
      this.size = this.size + 1;
    }
  };
}
