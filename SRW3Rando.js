function randomize(rom, rng, opts, log) {
	let forceDespawnPilots = 1;
	// I think I coded myself into a corner and thus decided to try the below to see if this works
	
	let randSplit = [rom, log];  // randSplit[0] is the rom, randSplit[1] is the spoiler log
	
	randSplit[1]='Start of Spoiler Log+\r\n';
	//scenario 1
	randSplit[1]+='Scenario 1 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 16, 0, scenarioOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 3, 13, 1, 6, 23, 23);  // scenario 1 enemy on map spawn
	randSplit[1]+='Scenario 1 Enemy Reinforcements\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 5, 1, scenarioOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 5, 15, 1, 6, 23, 23);  // scenario 1 reinforcements
	randSplit[1]+='Scenario 1 Ally Set Up\r\n\r\n';
	randSplit = allyRandomize(randSplit[1], 11, 1, scenarioOneAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 1, 8, 23, 23);	// scenario 1 ally spawn
	// Force Denim etc as they leave the map
	if (forceDespawnPilots)
	{
		randSplit[0][scenarioOneEnemy[0][0]+24]=0x6d;
		randSplit[0][scenarioOneEnemy[0][0]+32]=0x6e;
		randSplit[0][scenarioOneEnemy[0][0]+40]=0x6f;
	}
	
	// scenario 2
	randSplit[1]+='Scenario 2 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 17,0, scenarioTwoEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 5, 12, 1, 4, 0, 0); // scenario 2 enemy on map spawn  // unknown gridsize
	// I don't think there's scenario 2 reinforcements
	// no new allies spawnedon this map **May need to reevaluate where x y positions are pulled from !!!!!
	// end of battle pilot acquisition
	// newAllyPilot(0, newPilotScenTwo, pilotList, randSplit[0], rng, 4, 9);
	
	// scenario 3
	randSplit[1]+='Scenario 3 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 16, 0, scenarioThreeEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 16, 1, 7, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenThree, pilotList, randSplit[0], rng, 5, 10);
	
	// scenario 4 // 3A maybe?   // Von Braun ?
	randSplit[1]+='Scenario 4 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 26, 0, scenarioFourEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenFour, pilotList, randSplit[0], rng, 5, 11);
	
	// May be similar to scenario 4... so 3A and 3B? // atmospheric entry?
	randSplit[1]+='Scenario 5 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 26, 0, scenarioFiveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenFive, pilotList, randSplit[0], rng, 5, 11);
	
	//scenario 6?
	randSplit[1]+='Scenario 6 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 16, 0, scenarioSixEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenSix, pilotList, randSplit[0], rng, 5, 11);
	
	//scenario 7?
	randSplit[1]+='Scenario 7 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 12, 0, scenarioSevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenSeven, pilotList, randSplit[0], rng, 5, 11);
	
	
	//scenario 8?
	randSplit[1]+='Scenario 8 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 12, 0, scenarioEightEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);



	//scenario 9?  No, this is combattler, which is scenario 13?
	randSplit[1]+='Scenario 9 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 12, 0, scenarioNineEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//can we even randomize these five and the combattler acquisition itself?
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);
	
	//scenario 10? 
	randSplit[1]+='Scenario 10 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 6, 0, scenarioElevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 11? 
	randSplit[1]+='Scenario 11 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 11, 0, scenarioTwelveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 12? 
	randSplit[1]+='Scenario 12 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 26, 0, scenarioThirteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 13? 
	randSplit[1]+='Scenario 13 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 27, 0, scenarioFourteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 14? 
	randSplit[1]+='Scenario 14 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 18, 0, scenarioFifteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 15? 
	randSplit[1]+='Scenario 15 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 34, 0, scenarioSixteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 16? 
	randSplit[1]+='Scenario 16 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 25, 0, scenarioSeventeenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 17? 
	randSplit[1]+='Scenario 17 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 25, 0, scenarioEighteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 18? 
	randSplit[1]+='Scenario 18 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioNineteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 19? 
	randSplit[1]+='Scenario 19 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioTwentyEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 20? 
	randSplit[1]+='Scenario 20 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 2, 0, scenarioTwentyAEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 21?   Lune's Scenario
	randSplit[1]+='Scenario 21 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 1, 0, scenarioTwentyOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 22? 
	randSplit[1]+='Scenario 22 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 27, 0, scenarioTwentyTwoEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 23? 
	randSplit[1]+='Scenario 23 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 12, 0, scenarioTwentyThreeEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 24? 
	randSplit[1]+='Scenario 24 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 30, 0, scenarioTwentyFourEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 25? 
	randSplit[1]+='Scenario 25 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 21, 0, scenarioTwentyFiveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 25A? 
	randSplit[1]+='Scenario 25A Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 1, 0, scenarioTwentyFiveAEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 26? 
	randSplit[1]+='Scenario 26 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 31, 0, scenarioTwentySixEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 27? 
	randSplit[1]+='Scenario 27 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioTwentySevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 28? 
	randSplit[1]+='Scenario 28 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 35, 0, scenarioTwentyEightEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 29? 
	randSplit[1]+='Scenario 29 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioTwentyNineEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 30? 
	randSplit[1]+='Scenario 30 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 34, 0, scenarioThirtyEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 31? 
	randSplit[1]+='Scenario 31 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 29, 0, scenarioThirtyOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 32? 
	randSplit[1]+='Scenario 32 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 31, 0, scenarioThirtyTwoEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 33? 
	randSplit[1]+='Scenario 33 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 23, 0, scenarioThirtyThreeEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 34? 
	randSplit[1]+='Scenario 34 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 19, 0, scenarioThirtyFourEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 35? 
	randSplit[1]+='Scenario 35 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 10, 0, scenarioThirtyFiveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 36? 
	randSplit[1]+='Scenario 36 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 3, 0, scenarioThirtySixEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 37? 
	randSplit[1]+='Scenario 37 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 32, 0, scenarioThirtySevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 38? 
	randSplit[1]+='Scenario 38 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 17, 0, scenarioThirtyEightEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 39? 
	randSplit[1]+='Scenario 39 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 30, 0, scenarioThirtyNineEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 40? 
	randSplit[1]+='Scenario 40 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 10, 0, scenarioFourtyEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 41? 
	randSplit[1]+='Scenario 41 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 14, 0, scenarioFourtyOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 42? 
	randSplit[1]+='Scenario 42 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 15, 0, scenarioFourtyTwoEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 43? 
	randSplit[1]+='Scenario 43 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioFourtyThreeEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 44? 
	randSplit[1]+='Scenario 44 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 30, 0, scenarioFourtyFourEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 45? 
	randSplit[1]+='Scenario 45 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 2, 0, scenarioFourtyFiveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 46? 
	randSplit[1]+='Scenario 46 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 1, 0, scenarioFourtySixEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 47? 
	randSplit[1]+='Scenario 47 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 30, 0, scenarioFourtySevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 48? 
	randSplit[1]+='Scenario 48 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 37, 0, scenarioFourtyEightEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 49? 
	randSplit[1]+='Scenario 49 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 21, 0, scenarioFourtyNineEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	
	
  return randSplit;
}