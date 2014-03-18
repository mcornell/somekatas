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
  for (var i = 0; i < this.rolls.length; i++) {
    score += this.rolls[i];
  }
  return score;
};