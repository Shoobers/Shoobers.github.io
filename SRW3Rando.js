


	

function randomize(rom, rng, opts) {

	
	//scenario 1
	//on scenario start
	for ( let i = 0; i < 16; i+=1)
	{
		rom[(scenarioOneEnemy[0][0]+(i*8))]=pilotList[Math.floor( rng() * pilotList.length)];  //Pilots
		rom[(scenarioOneEnemy[1][0]+(i*8))]=(Math.floor( rng() * 12)+1);  //level
		rom[(scenarioOneEnemy[2][0]+(i*8))]=fullEnemyMechs[Math.floor( rng() * fullEnemyMechs.length)]; //mechs
		rom[(scenarioOneEnemy[3][0]+(i*8))]=(Math.floor( rng() * 5 )+1); // turns until activation
//		rom[(scenarioOneEnemy[6][0]+(i*8))]=Donotchangeyet;
	}



	//first set of reinforcements
	for ( let i = 0; i < 3; i+=1)
	{
		rom[(scenarioOneEnemy[0][1]+(i*8))]=pilotList[Math.floor( rng() * pilotList.length)];  //Pilots
		rom[(scenarioOneEnemy[1][1]+(i*8))]=(Math.floor( rng() * 10)+3);  //level
		rom[(scenarioOneEnemy[2][1]+(i*8))]=fullEnemyMechs[Math.floor( rng() * fullEnemyMechs.length)]; //mechs
		rom[(scenarioOneEnemy[3][1]+(i*8))]=(Math.floor( rng() * 5 )+1); // turns until activation
//		rom[(scenarioOneEnemy[4][1]+(i*8))]=Math.floor( rng() * 23 ); // x position
//		rom[(scenarioOneEnemy[5][1]+(i*8))]=Math.floor( rng() * 23 ); // y position
//		rom[(scenarioOneEnemy[6][1]+(i*8))]=Donotchangeyet;
	}

	//ally spawn
	for ( let i = 0; i < 10; i+=1)
	{
		let v = pilotList[Math.floor( rng() * pilotList.length)];
		rom[(scenarioOneAlly[0][0]+(i*4))]=v//pilots
		if ( i > 0 && i < 9 ) {	
			rom[(scenarioOneAlly[6][0]+((i-1)*3))]=v;
		}
		rom[(scenarioOneAlly[1][0]+(i*4))]=(Math.floor( rng() * 8)+1); //level
		rom[(scenarioOneAlly[2][0]+(i*4))]=fullAllyMechs[Math.floor( rng() * fullAllyMechs.length)]; //mechs 
//		rom[(scenarioOneAlly[3][0]+(i*4))]=Donotchangeyet;
	}
//	rom[scenarioOneAlly[4][0]]=Math.floor(rng()*23); // x position
//	rom[scenarioOneAlly[5][0]]=Math.floor(rng()*23); // y position
//	for ( let i = 1; i < 10; i+=1)
//	{
//		rom[(scenarioOneAlly[4][0]+((i-1)*3))]=Math.floor(rng()*23); // x position
//		rom[(scenarioOneAlly[5][0]+((i-1)*3))]=Math.floor(rng()*23); // y position
//		rom[(scenarioOneAlly[6][0]+((i-1)*3))]=rom[scenarioOneAlly[0][0]+i*4];
//	}
	
//	this.randomized=true;
	
	

  return [rom];
}