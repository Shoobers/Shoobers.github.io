function randomize(rom, rng, opts) {

	let forceDespawnPilots = 1;
	//scenario 1
	enemyRandomize(16, 0, scenarioOneEnemy, pilotList, spaceEnemyMechs, rom, rng, 3, 13, 1, 6, 23, 23);  // scenario 1 enemy on map spawn
	enemyRandomize(5, 1, scenarioOneEnemy, pilotList, spaceEnemyMechs, rom, rng, 5, 15, 1, 6, 23, 23);  // scenario 1 reinforcements
	allyRandomize(11, 1, scenarioOneAlly, pilotList, spaceAllyMechs, rom, rng, 1, 8, 23, 23);	// scenario 1 ally spawn
	// Force Denim etc as they leave the map
	if (forceDespawnPilots)
	{
		rom[scenarioOneEnemy[0][0]+24]=0x6d;
		rom[scenarioOneEnemy[0][0]+32]=0x6e;
		rom[scenarioOneEnemy[0][0]+40]=0x6f;
	}
	
	
	// scenario 2
	enemyRandomize(17,0, scenarioTwoEnemy, pilotList, spaceEnemyMechs, rom, rng, 5, 12, 1, 4, 0, 0); // scenario 2 enemy on map spawn  // unknown gridsize
	// I don't think there's scenario 2 reinforcements
	// no new allies spawnedon this map **May need to reevaluate where x y positions are pulled from !!!!!
	// end of battle pilot acquisition
	// newAllyPilot(0, newPilotScenTwo, pilotList, rom, rng, 4, 9);
	
	// scenario 3
	enemyRandomize(16, 0, scenarioThreeEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 16, 1, 7, 0, 0);
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
	
	//scenario 10? 
	enemyRandomize(6, 0, scenarioElevenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 11? 
	enemyRandomize(11, 0, scenarioTwelveEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 12? 
	enemyRandomize(26, 0, scenarioThirteenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 13? 
	enemyRandomize(27, 0, scenarioFourteenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 14? 
	enemyRandomize(18, 0, scenarioFifteenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 15? 
	enemyRandomize(34, 0, scenarioSixteenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 16? 
	enemyRandomize(25, 0, scenarioSeventeenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 17? 
	enemyRandomize(25, 0, scenarioEighteenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 18? 
	enemyRandomize(22, 0, scenarioNineteenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 19? 
	enemyRandomize(22, 0, scenarioTwentyEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 20? 
	enemyRandomize(2, 0, scenarioTwentyAEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 21?   Lune's Scenario
	enemyRandomize(1, 0, scenarioTwentyOneEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 22? 
	enemyRandomize(27, 0, scenarioTwentyTwoEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 23? 
	enemyRandomize(12, 0, scenarioTwentyThreeEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 24? 
	enemyRandomize(30, 0, scenarioTwentyFourEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 25? 
	enemyRandomize(21, 0, scenarioTwentyFiveEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 25A? 
	enemyRandomize(1, 0, scenarioTwentyFiveAEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 26? 
	enemyRandomize(31, 0, scenarioTwentySixEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 27? 
	enemyRandomize(22, 0, scenarioTwentySevenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 28? 
	enemyRandomize(35, 0, scenarioTwentyEightEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 29? 
	enemyRandomize(22, 0, scenarioTwentyNineEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 30? 
	enemyRandomize(34, 0, scenarioThirtyEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 31? 
	enemyRandomize(29, 0, scenarioThirtyOneEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 32? 
	enemyRandomize(31, 0, scenarioThirtyTwoEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 33? 
	enemyRandomize(23, 0, scenarioThirtyThreeEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 34? 
	enemyRandomize(19, 0, scenarioThirtyFourEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 35? 
	enemyRandomize(10, 0, scenarioThirtyFiveEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 36? 
	enemyRandomize(3, 0, scenarioThirtySixEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 37? 
	enemyRandomize(32, 0, scenarioThirtySevenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 38? 
	enemyRandomize(17, 0, scenarioThirtyEightEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 39? 
	enemyRandomize(30, 0, scenarioThirtyNineEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 40? 
	enemyRandomize(10, 0, scenarioFourtyEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 41? 
	enemyRandomize(14, 0, scenarioFourtyOneEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 42? 
	enemyRandomize(15, 0, scenarioFourtyTwoEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 43? 
	enemyRandomize(22, 0, scenarioFourtyThreeEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 44? 
	enemyRandomize(30, 0, scenarioFourtyFourEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 45? 
	enemyRandomize(2, 0, scenarioFourtyFiveEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 46? 
	enemyRandomize(1, 0, scenarioFourtySixEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 47? 
	enemyRandomize(30, 0, scenarioFourtySevenEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 48? 
	enemyRandomize(37, 0, scenarioFourtyEightEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	//scenario 49? 
	enemyRandomize(21, 0, scenarioFourtyNineEnemy, pilotList, spaceEnemyMechs, rom, rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, rom, rng, 7, 14, 0, 0);

	
	
	
  return [rom];
}