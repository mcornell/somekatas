function Game() {
  this.disks = [1, 2, 3, 4, 5];
  this.towers = [[], [], []];

  this.init = function(disks, towers) {
    disks.forEach(function(disk) {
      towers[0].push(disk);
    });
  };
  this.init(this.disks, this.towers);
}