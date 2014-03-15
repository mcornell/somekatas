describe("Bowling Game", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("Can calculate the score for all gutter balls", function() {
    expect(game.calculateScore("--------------------")).toBe(0);
  });

  it("can split a game string into a Frame array", function() {
    var frames = game.convertGameStringToFrames("39XXX4/XXXXXXX");
    console.log(frames);
    expect(frames.length).toBe(10);
    expect(frames[0].ball1).toBe('3');
    expect(frames[0].ball2).toBe('9');
    expect(frames[0].ball3).toBe('X');

    expect(frames[1].ball1).toBe('X');
    expect(frames[1].ball2).toBe('X');
    expect(frames[1].ball3).toBe('X');

    expect(frames[2].ball1).toBe('X');
    expect(frames[2].ball2).toBe('X');
    expect(frames[2].ball3).toBe('4');
  });

  it("Can calculate a perfect game", function() {
    expect(game.calculateScore("XXXXXXXXXXXX")).toBe(300);
  });

  it("Can calculate a Dutch game", function() {
    expect(game.calculateScore("X9/X9/X9/X9/X9/X9/X9/X9/X9/X9/")).toBe(200);
  });

});