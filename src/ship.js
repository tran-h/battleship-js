class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  hit() {
    this.timesHit++;
  }

  isSunk() {
    let sunkStatus = this.length === this.timesHit ? true : false;
    this.sunk = sunkStatus;
    return sunkStatus;
  }
}

module.exports = { Ship };
