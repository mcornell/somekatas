function BowlingGame() {
  this.score = 0;
  this.rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.currentRoll = 0;
}

BowlingGame.prototype.roll = function(pins) {
  this.score += pins;
  this.rolls[this.currentRoll++] = pins;
};

BowlingGame.prototype.getScore = function() {
  var score = 0;
  for (var frame = 0, i = 0; frame < 10; frame++) {
    if (this.rolls[i] + this.rolls[i + 1] === 10) {
      score += 10 + this.rolls[i + 2];
    }
    else {
      score += this.rolls[i] + this.rolls[i + 1];
    }
    i += 2;
  }

  return score;
};