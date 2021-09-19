function randomize(rom, rng, opts) {

	//scenario 1
	enemyRandomize(16, 0, scenarioOneEnemy, pilotList, spaceEnemyMechs, rom, rng);  // scenario 1 enemy on map spawn
	enemyRandomize(5, 1, scenarioOneEnemy, pilotList, spaceEnemyMechs, rom, rng);  // scenario 1 reinforcements
	allyRandomize(11, 0, scenarioOneAlly, pilotList, spaceAllyMechs, rom, rng);	// scenario 1 ally spawn
	
	// scenario 2
	enemyRandomize(17,0, scenarioTwoEnemy, pilotList, spaceEnemyMechs, rom, rng); // scenario 2 enemy on map spawn
	// I don't think there's scenario 2 reinforcements
	// no new allies spawnedon this map **May need to reevaluate where x y positions are pulled from !!!!!
	// end of battle pilot acquisition
	// newAllyPilot(0, newPilotScenTwo, pilotList, rom, rng);
	
	// scenario 3
	enemyRandomize(16, 0, scenarioTwoEnemy, pilotlist, spaceEnemyMechs, rom, rng);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenThree, pilotList, rom, rng);
	
	// scenario 4
	enemyRandomize(26, 0 , scenarioFourEnemy, pilotList, spaceEnemyMechs, rom, rng);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenFour, pilotList, rom, rng);
	
	

	

	
	
  return [rom];
}