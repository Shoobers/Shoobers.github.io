function randomize(rom, rng, opts) {

	//scenario 1
	enemyRandomize(16, 0, scenarioOneEnemy, pilotList, spaceEnemyMechs, rom, rng);  // scenario 1 enemy on map spawn
	enemyRandomize(5, 1, scenarioOneEnemy, pilotList, spaceEnemyMechs, rom, rng);  // scenario 1 reinforcements
	allyRandomize(11, 0, scenarioOneAlly, pilotList, spaceAllyMechs, rom, rng);	// scenario 1 ally spawn
	//

	
	
  return [rom];
}