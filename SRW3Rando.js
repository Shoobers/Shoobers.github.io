function randomize(rom, rng, opts) {

	enemyRandomize(16, 0, scenarioOneEnemy, pilotList, fullEnemyMechs, rom, rng);  // scenario 1 enemy on map spawn
	enemyRandomize(5, 1, scenarioOneEnemy, pilotList, fullEnemyMechs, rom, rng);  // scenario 1 reinforcements
	allyRandomize(11, 0, scenarioOneAlly, pilotList, fullAllyMechs, rom, rng);	// scenario 1 ally spawn
	//scenario 1
	//on scenario start

	
//	this.randomized=true;
	
	

  return [rom];
}