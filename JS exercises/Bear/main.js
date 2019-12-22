function days() {
  var forest = new dayAtforest('Forest');
  forest.populateForest();
  
  for (var x = 1; x < 31; x++) {
    if (!forest.bear.minMass()) {
      forest.dayGoesby();
      console.log('Day: ' + x);
      if (x > 20) {
        var random = getRandomNumber(1, 100);
        if (random > 30) {
          forest.hunterEncounter();
        }
      }

    }
    
  }



  console.log(forest);
}
days();


