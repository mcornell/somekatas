describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("By defult has 5 disks", function() {
    expect(game.disks.length).toBe(5);
  });

  it("All disks start on tower A", function() {
    console.log(game.towers);
    expect(game.towers['A'].length).toBe(5);
    expect(game.towers['A'][0]).toBe(5);
    expect(game.towers['A'][4]).toBe(1);
  });

  it("can move a single disc from tower 'A' to 'B'", function() {
    game.move('A', 'B');
    expect(game.towers['A'].length).toBe(4);
    expect(game.towers['B'].length).toBe(1);
    expect(game.towers['B'][0]).toBe(1);
  });

  it("can recursively solve the puzzle", function() {
    game.solve();
    expect(game.towers['A'].length).toBe(0);
    expect(game.towers['B'].length).toBe(0);
    expect(game.towers['C'].length).toBe(5);
    expect(game.towers['C'][0]).toBe(5);
    expect(game.towers['C'][4]).toBe(1);
  });

  it("can create a game with only 3 pegs and solve it", function() {
    game = new Game(3);
    expect(game.disks.length).toBe(3);
    game.solve();
    expect(game.towers['A'].length).toBe(0);
    expect(game.towers['B'].length).toBe(0);
    expect(game.towers['C'].length).toBe(3);
    expect(game.towers['C'][0]).toBe(3);
    expect(game.towers['C'][2]).toBe(1);
  });


});