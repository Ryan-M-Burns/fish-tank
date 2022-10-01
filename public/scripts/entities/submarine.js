class Submarine extends Fish {

  constructor(options) {
    super(options);
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
    this.imageUri = '/images/submarine.png';
    this.maxSwimSpeed = 200;
    this.isTasty = false;
  }


  update(t) {
    if (this.outOfBounds(this.tank.getBounds())) {
      ;
    } else {
      for (var i = 0; i < this.calcPhysicsTicks(t); i++) {
        this.updateOneTick();
      }
    }
  }

  onClick(event) {
    this.imageUri = '/images/fishSkeleton.png';
  }

}

