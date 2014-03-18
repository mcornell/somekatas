describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("can score a gutter game", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.getScore()).toBe(0);
  });

  it("can score all ones", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.getScore()).toBe(20);
  });


});