describe("Bowling Game", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("Can calculate the score for all gutter balls", function() {
    expect(game.calculateScore("--------------------")).toBe(0);
  });

  it("Can calculate a perfect game", function() {
    expect(game.calculateScore("XXXXXXXXXXXX")).toBe(300);
  });

});