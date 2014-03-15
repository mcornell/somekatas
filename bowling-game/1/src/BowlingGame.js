function BowlingGame() {
  this.strike = 'X';
  this.spare = '/';
  this.miss = '-';
  this.values = {
    'X': function(ball, currentScore) {
      return 10;
    },
    '-': function(ball, currentScore) {
      return 0;
    },
    '/': function(ball, currentScore) {
      return 10 - currentScore;
    },
  };
};

function Frame(ballsToScoreFrame, number) {
  this.ball1 = ballsToScoreFrame[0];
  this.ball2 = ballsToScoreFrame[1];
  this.ball3 = ballsToScoreFrame[2];
  this.frameNumber = number;
  this.score = 0;
};

Frame.prototype.toString = function frameToString() {
  var ret = "Frame " + this.frameNumber + "[" + this.ball1 +
    "," + this.ball2 +
    "," + this.ball3 + "] : " + this.score;
  return ret;
};

BowlingGame.prototype.convertGameStringToFrames = function(gameString) {
  var frames = [],
    balls = gameString.split('');

  for (var i = 0, frameNumber = 1; i < gameString.length && frameNumber < 11; i++, frameNumber++) {
    var frameI = new Frame(balls.slice(i, i + 3), frameNumber);
    console.log(frameI.toString());
    frames.push(frameI);


    if (frameI.ball1 !== this.strike) {
      i++;
    }
  }

  return frames;
};

BowlingGame.prototype.scoreForBall = function(ball, currentScore) {
  var ballScore = 0;
  if (/^\d$/.test(ball)) {
    ballScore = parseInt(ball);
  }
  else {
    ballScore = this.values[ball](ball, currentScore);
  }
  // else if (ball === this.strike) {
  //   ballScore = 10;
  // }
  // else if (ball === this.miss) {
  //   ballScore = 0;
  // }
  // else if (ball === this.spare) {
  //   ballScore = 10 - currentScore;
  // }

  return ballScore;
};


BowlingGame.prototype.scoreForFrame = function(frame, index, frameArray) {
  var score = 0;
  console.log("The frame is: " + frame);
  // check for strike by scoring first ball
  score = this.scoreForBall(frame.ball1, score);
  console.log("score " + score + " is " + typeof score);
  if (score === 10) {
    // NEXT TWO BALLS ARE SCORED to get total for this frame
    var ball2 = this.scoreForBall(frame.ball2, 0);
    var ball3 = this.scoreForBall(frame.ball3, ball2);
    score = score + ball2 + ball3;
    console.log("score " + score + " is " + typeof score);
  }
  else {
    score = score + this.scoreForBall(frame.ball2, score);
    if (score === 10) {
      // Spare, so score 1 more:
      score = score + this.scoreForBall(frame.ball3, score);
    }
  }
  frame.score = score;
};

BowlingGame.prototype.addScores = function(accum, currentScore, index, array) {
  return accum + currentScore;
};

BowlingGame.prototype.scoreFrames = function(frameArray) {
  frameArray.forEach(this.scoreForFrame, this);
  var frameScores = frameArray.map(function(frame) {
    return frame.score;
  });
  return frameScores.reduce(this.addScores);
};

BowlingGame.prototype.calculateScore = function(game) {
  var frames = this.convertGameStringToFrames(game);

  return this.scoreFrames(frames);
};