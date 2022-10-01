class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/yellowFish.png';
  }
  onClick(event) {
    this.makeNewVelocity(50);
  }
}
