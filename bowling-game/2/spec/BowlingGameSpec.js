describe("BowlingGame", function() {
  var game;

  var rollMany = function(number, pins) {
    for (var i = 0; i < number; i++) {
      game.roll(pins);
    }
  };

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("can score a gutter game", function() {
    rollMany(20, 0);
    expect(game.getScore()).toBe(0);
  });

  it("can score all ones", function() {
    rollMany(20, 1);
    expect(game.getScore()).toBe(20);
  });

  // it("can score a single spare", function() {
  //   game.roll(5);
  //   game.roll(5);
  //   game.roll(3);
  //   rollMany(17, 0);
  //   expect(game.getScore()).toBe(16);
  // });


});