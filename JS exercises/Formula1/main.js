function cup(){
    var someRace = new Race("France");
    someRace.makeRacers();
    for(var i=1; i < 81; i++){
        someRace.racerCrashes();
        someRace.singleLap();
        console.log(" ");
        console.log("Lap No " +i);
        
        
        someRace.log();
        
    }
    someRace.averSpeedRacers();
    someRace.winner();
    
}

cup();