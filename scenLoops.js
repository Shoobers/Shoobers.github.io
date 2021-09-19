
function rand ( min, max, rng )
{
	let r = rng();
	r *= max-min+1;
	return Math.floor(r+min);
}

function pick_rand ( arr, rng, min=0 )
{
	return arr[rand(min, arr.length-1, rng)];
}

/*
Index defines where the table ends
wave indicates how many waves in we are ( 0 is map spawn, 1 is first set of reinforcements, 2 is another set of reinforcements )
scenEnemy is a two dimensional array with hexvalues, it's two dimensional in case there's more areas that need to be looked at.  This'll probably be the most important for talk triggers and the like when a certain enemy should be talked to etc. 
pilots is the set of pilots available to this map in an array of hex values
mechs is the set of mechs available to this map in an array of hex values
rom is the file
rng is the seed
*/
//enemy spawns
function enemyRandomize(index, wave, scenEnemy, pilots, mechs, rom, rng)   
	{
		for ( let i = 0; i < index; i+=1)
		{
			rom[(scenEnemy[0][wave]+(i*8))]=pick_rand(pilots, rng);  //Pilots
			rom[(scenEnemy[1][wave]+(i*8))]=rand(1, 12, rng);  //level
			rom[(scenEnemy[2][wave]+(i*8))]=pick_rand(mechs, rng); //mechs
			rom[(scenEnemy[3][wave]+(i*8))]=rand(1, 5, rng); // turns until activation
//			rom[(scenEnemy[4][wave]+(i*8))]=rand(0, 23, rng); // x position
//			rom[(scenEnemy[5][wave]+(i*8))]=rand(0, 23, rng); // y position
//			rom[(scenEnemy[6][wave]+(i*8))]=Donotchangeyet;
		}
	return rom;
	}



/*
Index defines where the table ends
wave indicates how many waves in we are ( 0 is map spawn, 1 is first set of reinforcements, 2 is another set of reinforcements )
scenEnemy is a two dimensional array with hexvalues, it's two dimensional in case there's more areas that need to be looked at.  This'll probably be the most important for talk triggers and the like when a certain enemy should be talked to etc. 
pilots is the set of pilots available to this map in an array of hex values
mechs is the set of mechs available to this map in an array of hex values
rom is the file
rng is the seed
*/
//ally spawns
function allyRandomize(index, wave, scenAlly, pilots, mechs, rom, rng)
{
	for ( let i = 0; i < index; i+=1)
	{
		let v = pick_rand(pilots, rng);
		rom[(scenarioOneAlly[0][wave]+(i*4))]=v//pilots
		if ( i > 0 && i < (index-1) ) {	  // -1 is due to Ryoma/Hayato/(Musashi/Benkei position) // These three pilots also have to have their setup dealt with elsewhere due to getter transitioning
			rom[(scenarioOneAlly[6][wave]+((i-1)*3))]=v;
		}
		rom[(scenarioOneAlly[1][wave]+(i*4))]=rand(1,8, rng); //level
		rom[(scenarioOneAlly[2][wave]+(i*4))]=pick_rand(mechs, rng); //mechs 
//		rom[(scenarioOneAlly[3][wave]+(i*4))]=Donotchangeyet;
	}
//	rom[scenarioOneAlly[4][0]]=Math.floor(rng()*23); // x position
//	rom[scenarioOneAlly[5][0]]=Math.floor(rng()*23); // y position
//	for ( let i = 1; i < 10; i+=1)
//	{
//		rom[(scenarioOneAlly[4][0]+((i-1)*3))]=Math.floor(rng()*23); // x position
//		rom[(scenarioOneAlly[5][0]+((i-1)*3))]=Math.floor(rng()*23); // y position
//		rom[(scenarioOneAlly[6][0]+((i-1)*3))]=rom[scenarioOneAlly[0][0]+i*4];  // I believe I already set it up for the above
//	}
	return rom;
}

//For getting pilots between stages

function newAllyPilot(index, scenAlly, pilots, rom, rng)
{
	for ( let i = 0; i < index; i +=1)
	{
		rom[(scenAlly[0][0]+(i*2))] = pick_rand(pilots, rng);
		rom[(scenAlly[0][1]+(i*2))] = rand(3, 9, rng);
	}
}
