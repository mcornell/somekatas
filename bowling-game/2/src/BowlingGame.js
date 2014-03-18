function BowlingGame() {
  this.score = 0;
  this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.currentRoll = 0;
}

BowlingGame.prototype.roll = function(pins) {
  this.score += pins;
  this.rolls[this.currentRoll++] = pins;
};

BowlingGame.prototype.isSpare = function(frameIndex) {
  return (this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10);
}

BowlingGame.prototype.getScore = function() {
  var score = 0;
  for (var frame = 0, framePtr = 0; frame < 10; frame++, framePtr++) {
    if (this.rolls[framePtr] === 10) {
      score += 10 + this.rolls[framePtr + 1] + this.rolls[framePtr + 2];
    }
    else if (this.isSpare(framePtr)) {
      score += 10 + this.rolls[framePtr + 2];
      framePtr++;
    }
    else {
      score += this.rolls[framePtr] + this.rolls[framePtr + 1];
      framePtr++;
    }
  }

  return score;
};