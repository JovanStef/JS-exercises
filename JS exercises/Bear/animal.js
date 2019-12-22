function Animal(name, mass) {
  this.name = name;
  this.mass = mass;



  this.minMass = function () {
    return this.mass <= 50;

  }
  this.maxMass = function () {
    return this.mass >= 500;

  }
  this.getName = function () {
    return this.name;
  }
  this.getMass = function () {
    return this.mass;
  }
  this.setMass = function (newMass) {
    this.mass = newMass;
  }

  this.eats = function (prey) {
    this.setMass(this.getMass() + prey.getMass());
  }
  this.eatsWolf = function (prey) {
    this.setMass(this.getMass() + prey.getMass() / 2);
    this.setMass(this.getMass() - prey.getMass() * 0.1);

  }
}

function Deer(name, mass) {
  Animal.call(this, name, mass)
}
Deer.prototype = new Animal();

function Rabbit(name, mass) {
  Animal.call(this, name, mass)
}
Rabbit.prototype = new Animal();

function Hog(name, mass) {
  Animal.call(this, name, mass)
}
Hog.prototype = new Animal();

function Bear(name, mass) {
  Animal.call(this, name, mass)
}
Bear.prototype = new Animal();

function Wolf(name, mass) {
  Animal.call(this, name, mass)
}
Wolf.prototype = new Animal();


