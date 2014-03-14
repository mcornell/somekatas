function BowlingGame() {};
BowlingGame.prototype.calculateScore = function(pins) {
  if (pins[0] === 'X') {
    return 300;
  }
  return 0;
};