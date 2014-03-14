describe("Bowling Game", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("Can calculate the score for all gutter balls", function() {
    expect(game.calculateScore("--------------------")).toBe(0);
  });


});