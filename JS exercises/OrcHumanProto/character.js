function Character(name, health, damageMin, damageMax, armor) {
    this.name = name;
    this.health = health;
    this.damageMin = damageMin;
    this.damageMax = damageMax;
    this.armor = armor;
   
    this.damage = function(){
       return getRandomNumber(damageMin, damageMax);
    } 

    this.attack = function (enemy) {
        enemy.setHealth(enemy.getHealth() - (this.damage() - enemy.armor));
    };

    this.getHealth = function () {
        return this.health;
    };
    this.setHealth = function (newHealth) {
        this.health = newHealth;
    };
    this.getAttack = function () {
        return this.damage();
    };
    this.isAllive = function () {
        return this.health > 0;
    }
}