
function Race(name) {
    this.name = name;
    this.racers = [];
    this.speedRacers = [];
    var random = getRandomNumber(200, 300);
    this.makeRacers = function () {
        for (var i = 1; i < 21; i++) {
            var randomR = getRandomNumber(200, 300);
            var racer = new Racer(i, randomR, randomR, randomR, 0);
            this.racers.push(racer);
        }
    };

    this.singleLap = function () {
         for (var i = 0; i < 10; i++) {
            for (var i = 0; i < this.racers.length; i++) {
                if (this.racers[i].getFuel() < 10 || this.racers[i].getTireHealth() < 10) {
                    this.racers[i].pitStop(random);
                    this.racers[i].setAverSpeed(this.racers[i].getAverSpeed() / 0.2);
                    console.log("Racer " + this.racers[i].getName() + " is in the pit stop");
                    
                }
                this.racers[i].setSpeed(getRandomNumber(200, 300));
                this.racers[i].setFuel(this.racers[i].getFuel() - getRandomNumber(1, 5));
                this.racers[i].setTireHealth(this.racers[i].getTireHealth() - getRandomNumber(1, 5));
                this.racers[i].setAverSpeed(this.racers[i].getSpeed());
            }
        }
    
    };

    this.averSpeedRacers = function () {
        for (var i = 0; i < this.racers.length; i++) {
            this.speedRacers.push(this.racers[i].getAverSpeed());
        }

    };

    this.racerCrashes = function () {
        if (this.racers.length > 1) {
            for (var i = 0; i < this.racers.length - 1; i++) {
                var randomCrash = getRandomNumber(0, 200);
                if (randomCrash === 5) {
                    this.racers.pop(i);
                    console.log("Racer " + this.racers[i].getName() + " Has crashed");
                }
            }
        }
        else {
            console.log("All racers have crashed");
        }

    };

    this.winner = function () {
        var maxSpeed = this.speedRacers[0];
        var IndexRacer = 0;
        for (var i = 0; i < this.speedRacers.length; i++) {
            if (this.speedRacers[i] > maxSpeed) {
                IndexRacer = i;
                maxSpeed = this.speedRacers[i];
            }
        }
        console.log("The winner is Racer " + (IndexRacer + 1), "With an average speed of " + Math.floor(maxSpeed / 80) + " km");
    };

    this.log = function () {
        for (var i = 0; i < this.racers.length; i++) {
            console.log("Racer " + this.racers[i].getName(), "Fuel " + this.racers[i].getFuel(), "Speed " + this.racers[i].getSpeed(), "Tire Health " + this.racers[i].getTireHealth(), "Average Speed " + this.racers[i].getAverSpeed());
        }
    }
};