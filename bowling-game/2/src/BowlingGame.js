function BowlingGame() {
  this.score = 0;
}

BowlingGame.prototype.roll = function(pins) {
  this.score += pins;
};

BowlingGame.prototype.getScore = function() {
  return this.score;
};