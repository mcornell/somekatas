describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("By defult has 5 disks and 3 towers", function() {
    expect(game.disks.length).toBe(5);
    expect(game.towers.length).toBe(3);
  });

  it("All disks start on tower 1", function() {
    expect(game.towers[0].length).toBe(5);
  });

  describe("moving disks", function() {

  });
});