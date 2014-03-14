function BowlingGame() {};

function Frame(ball1, ball2, ballPlus1, ballPlus2) {
  this.ball1 = ball1
  this.ball2 = (ball1 === 'X') ? null : ball2,
  this.ballPlus1 = (ball1 === 'X') ? ball2 : ballPlus1,
  this.ballPlus2 = (ball1 === 'X') ? ballPlus1 : ballPlus2
};

Frame.prototype.toString = function frameToString() {
  var ret = "Ball1: " + this.ball1 +
    "\nBall2: " + this.ball2 +
    "\nBallPlus1: " + this.ballPlus1 +
    "\nBallPlus2: " + this.ballPlus2;
  return ret;
}

BowlingGame.prototype.convertGameStringToFrames = function(gameString) {
  var frames = [],
    balls = gameString.split('');

  for (var i = 0, ballIdx = 0; i < 10 && ballIdx < gameString.length; i++, ballIdx++) {
    console.log("i = " + i + " ballIdx = " + ballIdx);
    if (i === 9) {
      frames.push({
        ball1: balls[ballIdx],
        ball2: balls[ballIdx + 1],
        ball3: balls[ballIdx + 2]
      });
    }
    else {
      var frame = new Frame(balls[ballIdx], balls[ballIdx + 1], balls[ballIdx + 2], balls[ballIdx + 3]);
      frames.push(frame);
      if (frame.ball2 !== null) {
        ballIdx++;
      }
    }

  }
  return frames;
};

BowlingGame.prototype.scoreForBall = function(ball) {
  console.log("the ball is: " + ball);
  if (ball === 'X' || ball === '/') {
    return 10;
  }
  else if (ball === '-') {
    return 0;
  }
  return ball;
};

BowlingGame.prototype.scoreStrikeFrame = function(frame) {
  var score = 10;
  if (frame.ballPlus2 === '/') {
    score += 10;
  }
  else {
    score += this.scoreForBall(frame.ballPlus1);
    score += this.scoreForBall(frame.ballPlus2);
  }
  return score;
};

BowlingGame.prototype.scoreOneThruNineFrame = function(frame) {
  var score = 0;
  if (frame.ball1 === 'X') {
    score = this.scoreStrikeFrame(frame);
  }
  else if (frame.ball2 === '/') {
    score += 10;
    score += this.scoreForBall(frame.ballPlus1);
  }
  else {
    score += this.scoreForBall(frame.ball1);
    score += this.scoreForBall(frame.ball2);
  }
  return score;
};

BowlingGame.prototype.scoreForFrame = function(frame) {
  var score = 0;
  console.log("The frame is: " + frame);
  if (frame.ball3 === undefined) {
    score = this.scoreOneThruNineFrame(frame);
  }
  else {
    if (frame.ball2 === '/') {
      score = 10;
      score += this.scoreForBall(frame.ball3);
    }
    else {
      score += this.scoreForBall(frame.ball1);
      score += this.scoreForBall(frame.ball2);
      score += this.scoreForBall(frame.ball3);
    }
  }
  return score;
};

BowlingGame.prototype.calculateScore = function(game) {
  var score = 0,
    frames = this.convertGameStringToFrames(game);
  for (var frame = 0; frame < frames.length; frame++) {
    score += this.scoreForFrame(frames[frame]);
    console.log("Score is: " + score + " after frame " + (frame + 1));
  }
  return score;
};