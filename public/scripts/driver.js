$(() => {

  window.fishtank = new Fishtank('fishtank');             // making it global to make debugging 1% easier.  shhhh.

  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish, Submarine);

  var plant1 = new Plant({
    tank:window.fishtank,
    position: new Vector(200, 0)
  })

  var plant2 = new PlantOne({
    tank:window.fishtank,
    position: new Vector(-380, 0)
  })

  var plant3 = new PlantTwo({
    tank:window.fishtank,
    position: new Vector(500, 0)
  })

  var plant4 = new Plant({
    tank:window.fishtank,
    position: new Vector(-110, 0)
  })

  var starter = new Starter({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0)
  });

});



