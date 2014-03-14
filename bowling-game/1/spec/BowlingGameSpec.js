describe("Bowling Game", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("Can calculate the score for all gutter balls", function() {
    expect(game.calculateScore("--------------------")).toBe(0);
  });

  it("can split a game string into a Frame array", function() {
    var frames = game.convertGameStringToFrames("XXXXXXXXXXXX");
    console.log(frames);
    expect(frames.length).toBe(10);
    expect(frames[1].ball1).toBe('X');
    expect(frames[1].ball2).toBe(null);
  });

  it("Can calculate a perfect game", function() {
    expect(game.calculateScore("XXXXXXXXXXXX")).toBe(300);
  });

  it("Can calculate a Dutch game", function() {
    expect(game.calculateScore("X9/X9/X9/X9/X9/X9/X9/X9/X9/X9/")).toBe(200);
  });

});