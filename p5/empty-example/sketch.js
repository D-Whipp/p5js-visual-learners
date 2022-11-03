let guessItem = null;
let interval = 100;
let results = [];
let solution = null;
let gameOver = false;

function setup() {
  createCanvas(800, 300);
}

function draw() {
  let gameScore = getGameScore(results);

  if (gameScore.loss === 3 || gameScore.total === 10) {
    gameOver = true;
    displayGameOver(gameScore);
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
  background(255);
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 2);

  fill(237, 24, 93);
  textSize(46);
  text('GAME OVER!', 0, 0);
  translate(0, 40);

  fill(0);
  text('You scored: ' + score.wins, 0, 0);
  translate(0, 90);

  let alternateVal = map(sin(frameCount / 10), -1, 1, 0, 255);
  fill(37, 34, 133, alternateVal);
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

function restartGame() {
  results = [];
  solution = null;
  gameOver = false;
}

function keyPressed() {
  if (gameOver === true) {
    if (keyCode === ENTER) {
      console.log('restart game');
      restartGame();
      return;
    }
  }
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
