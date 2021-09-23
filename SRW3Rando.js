function randomize(rom, rng, opts) {

	//scenario 1
	enemyRandomize(16, 0, scenarioOneEnemy, pilotList, spaceEnemyMechs, rom, rng, 3, 13, 1, 6, 23, 23);  // scenario 1 enemy on map spawn
	enemyRandomize(5, 1, scenarioOneEnemy, pilotList, spaceEnemyMechs, rom, rng, 5, 15, 1, 6, 23, 23);  // scenario 1 reinforcements
	allyRandomize(11, 0, scenarioOneAlly, pilotList, spaceAllyMechs, rom, rng, 1, 8, 23, 23);	// scenario 1 ally spawn
	
	// scenario 2
	enemyRandomize(17,0, scenarioTwoEnemy, pilotList, spaceEnemyMechs, rom, rng, 5, 12, 1, 4, 0, 0); // scenario 2 enemy on map spawn  // unknown gridsize
	// I don't think there's scenario 2 reinforcements
	// no new allies spawnedon this map **May need to reevaluate where x y positions are pulled from !!!!!
	// end of battle pilot acquisition
	// newAllyPilot(0, newPilotScenTwo, pilotList, rom, rng, 4, 9);
	
	// scenario 3
	enemyRandomize(16, 0, scenarioThreeEnemy, pilotlist, spaceEnemyMechs, rom, rng, 6, 16, 1, 7, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenThree, pilotList, rom, rng, 5, 10);
	
	// scenario 4 // 3A maybe?   // Von Braun ?
	enemyRandomize(26, 0, scenarioFourEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenFour, pilotList, rom, rng, 5, 11);
	
	// May be similar to scenario 4... so 3A and 3B? // atmospheric entry?
	enemyRandomize(26, 0, scenarioFiveEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenFive, pilotList, rom, rng, 5, 11);
	
	//scenario 6?
	enemyRandomize(16, 0, scenarioSixEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenSix, pilotList, rom, rng, 5, 11);
	
	//scenario 7?
	enemyRandomize(12, 0, scenarioSevenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenSeven, pilotList, rom, rng, 5, 11);
	
	
	//scenario 8?
	enemyRandomize(12, 0, scenarioEightEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);



	//scenario 9?  No, this is combattler, which is scenario 13?
	enemyRandomize(12, 0, scenarioNineEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//can we even randomize these five and the combattler acquisition itself?
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);
	
	
	
	
  return [rom];
}