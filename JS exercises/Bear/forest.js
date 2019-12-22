function dayAtforest(name) {
  this.name = name
  this.bear = new Bear('Bear', 100)
  this.animals = []

  this.populateForest = function () {
    for (var x = 0; x < 15; x++) {
      var counter = getRandomNumber(1, 4)
      switch (counter) {
        case 1:
          this.animals.push(new Deer('Deer', 150))
          break
        case 2:
          this.animals.push(new Rabbit('Rabbit', 6))
          break
        case 3:
          this.animals.push(new Hog('Hog', 100))
          break
        case 4:
          this.animals.push(new Wolf('Wolf', 50))
          break
        default:
          console.log('error')
          break
      }
    }
  }
  this.dayGoesby = function () {
    if (this.bear.minMass()) {
      console.log('The Bear is DEAD ' + this.bear.getMass());
      return
    }
    else if (this.bear.maxMass()) {
      console.log('The Bear is OVERWEIGHT '+ this.bear.getMass());
      this.bear.setMass(Math.floor(this.bear.getMass() - this.bear.getMass()*0.2));
      console.log(this.bear.getMass());
      return
    }
    else{
    
    var random = getRandomNumber(1, 3);
    if (random === 1) {
      var counter = getRandomNumber(0, this.animals.length - 1)
      if (this.animals[counter].getName() === 'Wolf'){
        console.log(this.bear.getMass())
        this.bear.eatsWolf(this.animals[counter]);
        console.log('Cought a Wolf ' + this.bear.getMass() )
      }
      else{
      this.bear.eats(this.animals[counter]);
      console.log(this.bear.getMass()+ ' ' + this.animals[counter].getName());
      this.animals.splice(counter, 1)
      }
      }
    }
  }
  this.hunterEncounter = function(){
    this.hunter = new Hunter ('Hunter');
    if(!this.bear.maxMass()){
      console.log(this.bear.getMass());
      this.hunter.bearEncounter(this.bear);
      console.log('The Bear escaped the hunter ' + this.bear.getMass())
    }
    else {
      console.log('The Bear is dead ' + this.bear.getMass());
      return this.bear.mass = this.bear.minMass();
    }
  }
  
  
  
}
