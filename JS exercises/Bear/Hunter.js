function Hunter(name){
    this.name = name;

    this.bearEncounter = function(pray){
        pray.setMass(Math.floor(pray.getMass()-pray.getMass()*0.3));
    }
}