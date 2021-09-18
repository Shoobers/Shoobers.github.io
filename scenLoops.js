//enemy spawns
function enemyRandomize(index, wave, scenEnemy, pilots, mechs, rom, rng)
	{
		for ( let i = 0; i < index; i+=1)
		{
			rom[(scenEnemy[0][wave]+(i*8))]=pilots[Math.floor( rng() * pilots.length)];  //Pilots
			rom[(scenEnemy[1][wave]+(i*8))]=(Math.floor( rng() * 12)+1);  //level
			rom[(scenEnemy[2][wave]+(i*8))]=mechs[Math.floor( rng() * mechs.length)]; //mechs
			rom[(scenEnemy[3][wave]+(i*8))]=(Math.floor( rng() * 5 )+1); // turns until activation
//			rom[(scenEnemy[4][wave]+(i*8))]=Math.floor( rng() * 23 ); // x position
//			rom[(scenEnemy[5][wave]+(i*8))]=Math.floor( rng() * 23 ); // y position
//			rom[(scenEnemy[6][wave]+(i*8))]=Donotchangeyet;
		}
	return rom;
	}





//ally spawns
function allyRandomize(index, wave, scenAlly, pilots, mechs, rom, rng)
{
	for ( let i = 0; i < index; i+=1)
	{
		let v = pilots[Math.floor( rng() * pilotList.length)];
		rom[(scenarioOneAlly[0][wave]+(i*4))]=v//pilots
		if ( i > 0 && i < (index-2) ) {	
			rom[(scenarioOneAlly[6][wave]+((i-1)*3))]=v;
		}
		rom[(scenarioOneAlly[1][wave]+(i*4))]=(Math.floor( rng() * 8)+1); //level
		rom[(scenarioOneAlly[2][wave]+(i*4))]=mechs[Math.floor( rng() * mechs.length)]; //mechs 
//		rom[(scenarioOneAlly[3][wave]+(i*4))]=Donotchangeyet;
	}
//	rom[scenarioOneAlly[4][0]]=Math.floor(rng()*23); // x position
//	rom[scenarioOneAlly[5][0]]=Math.floor(rng()*23); // y position
//	for ( let i = 1; i < 10; i+=1)
//	{
//		rom[(scenarioOneAlly[4][0]+((i-1)*3))]=Math.floor(rng()*23); // x position
//		rom[(scenarioOneAlly[5][0]+((i-1)*3))]=Math.floor(rng()*23); // y position
//		rom[(scenarioOneAlly[6][0]+((i-1)*3))]=rom[scenarioOneAlly[0][0]+i*4];
//	}
	return rom;
}
