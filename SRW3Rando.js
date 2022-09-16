function randomize(rom, rng, opts, log) {
	let forceDespawnPilots = 1;
	// I think I coded myself into a corner and thus decided to try the below to see if this works
	grid = [ , ];
	let randSplit = [rom, log, grid];  // randSplit[0] is the rom, randSplit[1] is the spoiler log
	
	randSplit[1]='Start of Spoiler Log+\r\n\r\n';
	//scenario 1
	randSplit[2]=setAllyAreaSquare(randSplit[2], 0, 15, 10, 22);
	
	randSplit[1]+='\r\nScenario 1 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 16, 0, scenarioOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 3, 13, 1, 6, 22, 23);  // scenario 1 enemy on map spawn
	randSplit[1]+='\r\nScenario 1 Enemy Reinforcements\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 5, 1, scenarioOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 5, 15, 1, 6, 22, 23);  // scenario 1 reinforcements
	randSplit[1]+='\r\nScenario 1 Ally Set Up\r\n\r\n';
	randSplit = allyRandomize(randSplit[1], 11, 0, scenarioOneAlly, pilotList, spaceAllyMechs, randSplit[0], rng, randSplit[2], 1, 8, 22, 23);	// scenario 1 ally spawn
	// Force Denim etc as they leave the map
//	let scenarioOneDespawn = [ 3, randSplit[0][scenarioOneEnemy[0][0]+24], randSplit[0][scenarioOneEnemy[0][0]+32], randSplit[0][scenarioOneEnemy[0][0]+40]];
//	randSplit = enemyDespawn(randSplit[1], scenarioOneDespawn, randSplit[0], randSplit[2], scenarioOneDespawnAddr );
//	if (forceDespawnPilots)
//	{
//		randSplit[0][scenarioOneEnemy[0][0]+24]=0x6d;
//		randSplit[0][scenarioOneEnemy[0][0]+32]=0x6e;
//		randSplit[0][scenarioOneEnemy[0][0]+40]=0x6f;
//	}

	// scenario 2

	randSplit[2] = grid;
	randSplit[1]+='\r\nScenario 2 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 17,0, scenarioTwoEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 5, 12, 1, 4, 0, 0); // scenario 2 enemy on map spawn  // unknown gridsize
	// I don't think there's scenario 2 reinforcements
	// no new allies spawnedon this map **May need to reevaluate where x y positions are pulled from !!!!!
	// end of battle pilot acquisition
	// newAllyPilot(0, newPilotScenTwo, pilotList, randSplit[0], rng, 4, 9);
	
	// scenario 3
	randSplit[1]+='\r\nScenario 3 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 16, 0, scenarioThreeEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 16, 1, 7, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenThree, pilotList, randSplit[0], rng, 5, 10);
	
	// scenario 4 // 3A maybe?   // Von Braun ?
	randSplit[1]+='\r\nScenario 4 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 26, 0, scenarioFourEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenFour, pilotList, randSplit[0], rng, 5, 11);
	
	// May be similar to scenario 4... so 3A and 3B? // atmospheric entry?
	randSplit[1]+='\r\nScenario 5 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 26, 0, scenarioFiveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenFive, pilotList, randSplit[0], rng, 5, 11);
	
	//scenario 6?
	randSplit[1]+='\r\nScenario 6 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 16, 0, scenarioSixEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenSix, pilotList, randSplit[0], rng, 5, 11);
	
	//scenario 7?
	randSplit[1]+='\r\nScenario 7 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 12, 0, scenarioSevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	// possible new pilot acquisition?
	// newAllyPilot(0, newPilotScenSeven, pilotList, randSplit[0], rng, 5, 11);
	
	
	//scenario 8?
	randSplit[1]+='\r\nScenario 8 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 12, 0, scenarioEightEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);



	//scenario 9?  No, this is combattler, which is scenario 13?
	randSplit[1]+='\r\nScenario 9 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 12, 0, scenarioNineEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//can we even randomize these five and the combattler acquisition itself?
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);
	
	//scenario 10? 
	randSplit[1]+='\r\nScenario 10 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 6, 0, scenarioElevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 11? 
	randSplit[1]+='\r\nScenario 11 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 11, 0, scenarioTwelveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 12? 
	randSplit[1]+='\r\nScenario 12 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 26, 0, scenarioThirteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 13? 
	randSplit[1]+='\r\nScenario 13 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 27, 0, scenarioFourteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 14? 
	randSplit[1]+='\r\nScenario 14 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 18, 0, scenarioFifteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 15? 
	randSplit[1]+='\r\nScenario 15 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 34, 0, scenarioSixteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 16? 
	randSplit[1]+='\r\nScenario 16 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 25, 0, scenarioSeventeenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 17? 
	randSplit[1]+='\r\nScenario 17 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 25, 0, scenarioEighteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 18? 
	randSplit[1]+='\r\nScenario 18 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioNineteenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 19? 
	randSplit[1]+='\r\nScenario 19 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioTwentyEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 20? 
	randSplit[1]+='\r\nScenario 20 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 2, 0, scenarioTwentyAEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 21?   Lune's Scenario
	randSplit[1]+='\r\nScenario 21 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 1, 0, scenarioTwentyOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 22? 
	randSplit[1]+='\r\nScenario 22 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 27, 0, scenarioTwentyTwoEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 23? 
	randSplit[1]+='\r\nScenario 23 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 12, 0, scenarioTwentyThreeEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 24? 
	randSplit[1]+='\r\nScenario 24 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 30, 0, scenarioTwentyFourEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 25? 
	randSplit[1]+='\r\nScenario 25 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 21, 0, scenarioTwentyFiveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 25A? 
	randSplit[1]+='\r\nScenario 25A Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 1, 0, scenarioTwentyFiveAEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 26? 
	randSplit[1]+='\r\nScenario 26 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 31, 0, scenarioTwentySixEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 27? 
	randSplit[1]+='\r\nScenario 27 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioTwentySevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 28? 
	randSplit[1]+='\r\nScenario 28 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 35, 0, scenarioTwentyEightEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 29? 
	randSplit[1]+='\r\nScenario 29 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioTwentyNineEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 30? 
	randSplit[1]+='\r\nScenario 30 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 34, 0, scenarioThirtyEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 31? 
	randSplit[1]+='\r\nScenario 31 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 29, 0, scenarioThirtyOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 32? 
	randSplit[1]+='\r\nScenario 32 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 31, 0, scenarioThirtyTwoEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng,  randSplit[2],6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 33? 
	randSplit[1]+='\r\nScenario 33 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 23, 0, scenarioThirtyThreeEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 34? 
	randSplit[1]+='\r\nScenario 34 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 19, 0, scenarioThirtyFourEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 35? 
	randSplit[1]+='\r\nScenario 35 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 10, 0, scenarioThirtyFiveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 36? 
	randSplit[1]+='\r\nScenario 36 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 3, 0, scenarioThirtySixEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 37? 
	randSplit[1]+='\r\nScenario 37 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 32, 0, scenarioThirtySevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 38? 
	randSplit[1]+='\r\nScenario 38 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 17, 0, scenarioThirtyEightEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 39? 
	randSplit[1]+='\r\nScenario 39 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 30, 0, scenarioThirtyNineEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 40? 
	randSplit[1]+='\r\nScenario 40 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 10, 0, scenarioFourtyEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 41? 
	randSplit[1]+='\r\nScenario 41 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 14, 0, scenarioFourtyOneEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 42? 
	randSplit[1]+='\r\nScenario 42 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 15, 0, scenarioFourtyTwoEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 43? 
	randSplit[1]+='\r\nScenario 43 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 22, 0, scenarioFourtyThreeEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 44? 
	randSplit[1]+='\r\nScenario 44 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 30, 0, scenarioFourtyFourEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 45? 
	randSplit[1]+='\r\nScenario 45 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 2, 0, scenarioFourtyFiveEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 46? 
	randSplit[1]+='\r\nScenario 46 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 1, 0, scenarioFourtySixEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 47? 
	randSplit[1]+='\r\nScenario 47 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 30, 0, scenarioFourtySevenEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 48? 
	randSplit[1]+='\r\nScenario 48 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 37, 0, scenarioFourtyEightEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2],  6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	//scenario 49? 
	randSplit[1]+='\r\nScenario 49 Enemy Spawn\r\n\r\n';
	randSplit = enemyRandomize(randSplit[1], 21, 0, scenarioFourtyNineEnemy, pilotList, spaceEnemyMechs, randSplit[0], rng, randSplit[2], 6, 17, 1, 9, 0, 0);
	//allyrandomize(5, 0, scenarioNineAlly, pilotList, spaceAllyMechs, randSplit[0], rng, 7, 14, 0, 0);

	
	
  return randSplit;
}