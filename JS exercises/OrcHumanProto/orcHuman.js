function Orc (name, health, damageMin, damageMax, armor){
    Character.call(this, name, health, damageMin, damageMax, armor);
}
Orc.prototype = new Character();

function Human (name, health, damageMin, damageMax, armor){
    Character.call(this, name, health, damageMin, damageMax, armor);
}
Human.prototype = new Character();