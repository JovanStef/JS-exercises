function Racer(name, speed, fuel, tireHealth,averSpeed) {
    this.name = name;
    this.speed = speed;
    this.fuel = fuel;
    this.tireHealth = tireHealth;
    this.averSpeed = averSpeed;

    this.getName = function(){
        return this.name;
    };

    this.getSpeed = function () {
        return this.speed;
    };

    this.getFuel = function () {
        return this.fuel;
    };

    this.getTireHealth = function () {
        return this.tireHealth;
    };
    this.setSpeed = function(newSpeed){
        this.speed = newSpeed;
    }
    this.setFuel = function (newFuel) {
        this.fuel = newFuel;
    };

    this.setTireHealth = function (newTireHealth) {
        this.tireHealth = newTireHealth;
    };

    this.getAverSpeed = function(){
        return this.averSpeed;
    };

    this.pitStop = function (random) {
        this.setFuel(random);
        this.setTireHealth(random);
    };

    this.setAverSpeed = function(currentSpeed){
        this.averSpeed+=currentSpeed;
    };

};