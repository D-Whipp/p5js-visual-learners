let guessItem = null;
let interval = 150;
let results = [];
let solution = null;

function setup() {
  createCanvas(800, 300);
}

function draw() {
  let gameScore = getGameScore(results);
  // console.log(gameScore);
  displayGameOver(gameScore);
  return;

  if (gameScore.loss === 3 || gameScore.total === 10) {
    return;
  }

  background(220);
  if (frameCount === 1 || frameCount % interval === 0) {
    solution = null;
    guessItem = new GuessItem(width / 2, height / 2, 10);
  }

  if (guessItem) {
    guessItem.render();
  }

  if (solution === true) {
    background(255);
  } else if (solution === false) {
    background(0);
  }
}

function displayGameOver(score) {
  push();
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 2);

  fill(237, 24, 93);
  textSize(46);
  text('GAME OVER!', 0, 0);
  translate(0, 40);

  fill(0);
  // console.log(score.wins)
  text('You scored: ' + score.wins, 0, 0);
  translate(0, 90);

  fill(37, 34, 133);
  textSize(24);
  text('Press ENTER to play again.', 0, 0);
  pop();
}

function getGameScore(score) {
  let wins = 0;
  let losses = 0;
  let total = score.length;

  for (let i = 0; i < total; i++) {
    let item = score[i];
    if (item === true) {
      wins = wins + 1;
    } else {
      losses = losses + 1;
    }
  }
  return { wins: wins, loss: losses, total: total };
}

function keyPressed() {
  if (guessItem !== null) {
    console.log("I'm listening", key);
    solution = guessItem.solve(key);
    if (solution) {
      results.push(true);
    } else {
      results.push(false);
    }
    guessItem = null;
  } else {
    console.log('nothing to be solved');
  }
}

function GuessItem(x, y, scl) {
  this.x = x;
  this.y = y;
  this.scale = scl;
  this.scaleIncrement = 0.25;
  this.content = getContent();
  this.alpha = 255;
  this.alphaDecrement = 3;

  function getContent() {
    return String(parseInt(random(10), 10));
  }

  this.solve = function (input) {
    if (input === this.content) {
      this.solved = true;
    } else {
      this.solved = false;
    }
    return this.solved;
  };

  this.render = function () {
    if (this.solved === false) {
      return;
    }
    push();
    fill(0, this.alpha);
    textAlign(CENTER, CENTER);
    translate(this.x, this.y);
    scale(this.scale);
    text(this.content, 0, 0);
    this.scale = this.scale + this.scaleIncrement;
    this.alpha = this.alpha - this.alphaDecrement;
    pop();
  };
}
