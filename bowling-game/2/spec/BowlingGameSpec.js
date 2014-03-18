describe("BowlingGame", function() {
  var game;

  var rollMany = function(number, pins) {
    for (var i = 0; i < number; i++) {
      game.roll(pins);
    }
  };

  var rollSpare = function() {
    game.roll(5);
    game.roll(5);
  }

  var rollStrike = function() {
    game.roll(10);
  }

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

  it("can score a single spare", function() {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.getScore()).toBe(16);
  });

  it("can score a single strike", function() {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.getScore()).toBe(24);
  });

  it("can score a perfect game", function() {
    rollMany(12, 10);
    expect(game.getScore()).toBe(300);
  });


});