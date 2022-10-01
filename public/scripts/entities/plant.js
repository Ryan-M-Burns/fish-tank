class Plant extends Denizen {

  constructor(options) {
    super(options);
    this.height = 100;
    this.width = 100;
    this.imageUri = '/images/plant1.png';
    this.position.y += this.height;
  }


  update(t) {
    // no physics for Plants
  }

  onClick(event) {

    if(this.height < 220){
      this.height += 20;
      this.width += 20;
    } else {
      this.height = 40;
      this.width = 40;
    }
  }
};
