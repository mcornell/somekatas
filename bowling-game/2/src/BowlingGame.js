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
};

BowlingGame.prototype.isStrike = function(frameIndex) {
  return (this.rolls[frameIndex] === 10);
};

BowlingGame.prototype.strikeBonus = function(frameIndex) {
  return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
};

BowlingGame.prototype.spareBonus = function(frameIndex) {
  return this.rolls[frameIndex + 2];
};

BowlingGame.prototype.calculateFrame = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
};

BowlingGame.prototype.getScore = function() {
  var score = 0;
  for (var frame = 0, framePtr = 0; frame < 10; frame++, framePtr++) {
    if (this.isStrike(framePtr)) {
      score += 10 + this.strikeBonus(framePtr);
    }
    else if (this.isSpare(framePtr)) {
      score += 10 + this.spareBonus(framePtr);
      framePtr++;
    }
    else {
      score += this.calculateFrame(framePtr);
      framePtr++;
    }
  }

  return score;
};