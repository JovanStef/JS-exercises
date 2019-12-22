function Batlle(name) {
    this.name = name;
    this.orc = new Orc('Orc', 720, 23, 35, 5);
    this.human = new Human('Human', 550, 18, 27, 9);

    
    this.orcAttack = function () {
        this.orc.attack(this.human);

    }
    this.humanAttack = function () {
        this.human.attack(this.orc);

    }
    this.fight = function () {
        this.humanAttack();
        this.orcAttack();
    }
    this.declareVictory = function () {
        while (this.orc.isAllive() && this.human.isAllive()) {
            console.log(' ');
            console.log('Orc attack: ' + this.orc.getAttack() + ' ' + 'Human attack: ' + this.human.getAttack());
            console.log('Orc health: ' + this.orc.getHealth() + ' ' + 'Human health: ' + this.human.getHealth());
            this.fight();
        }
        if (!this.orc.isAllive()) {
            console.log('Human Wins');
            console.log('Orc health: ' + this.orc.getHealth());
        }
        else {
            console.log('Orc Wins');
            console.log('Human health: ' + this.human.getHealth());
        }
    }

}

function startBattle() {
    var initBattle = new Batlle('someBattle');
    initBattle.declareVictory();



}

startBattle();
