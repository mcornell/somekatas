function Game(count) {
  var diskCount = typeof count !== 'undefined' ? count : 5;
  this.disks = [];
  this.towers = {
    'A': [],
    'B': [],
    'C': []
  };

  this.init = function(numdisks, disks, towers) {
    for (var i = numdisks; i > 0; i--) {
      disks.push(i);
    }
    disks.forEach(function(disk) {
      towers['A'].push(disk);
    });
  };
  this.init(diskCount, this.disks, this.towers);
};

Game.prototype.toString = function() {
  return "Tower A: " + this.towers['A'] + "\nTower B: " + this.towers['B'] + "\nTower C: " + this.towers['C'];
};

Game.prototype.move = function(from, to) {
  var disk = this.towers[from].pop();
  this.towers[to].push(disk);
  console.log('moved ' + disk + ' from ' + from + ' to ' + to);
};

Game.prototype.hanoi = function(number, from, temp, to) {
  if (number > 0) {
    this.hanoi(number - 1, from, to, temp);
    this.move(from, to);
    this.hanoi(number - 1, temp, from, to);
  }
};

Game.prototype.solve = function() {
  this.hanoi(this.disks.length, 'A', 'B', 'C');
  console.log("this:" + this);
}