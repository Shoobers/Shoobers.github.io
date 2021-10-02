
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
function enemyRandomize(spoilLog, index, wave, scenEnemy, pilots, mechs, rom, rng, minlevel, maxlevel, minturn, maxturn, maxGridX, maxGridY, minGridX=0, minGridY=0 )   
{
	for ( let i = 0; i < index; i+=1)
	{
		rom[(scenEnemy[0][wave]+(i*8))]=pick_rand(pilots, rng);  //Pilots
		rom[(scenEnemy[1][wave]+(i*8))]=rand(minlevel, maxlevel, rng);  //level
		rom[(scenEnemy[2][wave]+(i*8))]=pick_rand(mechs, rng); //mechs
		rom[(scenEnemy[3][wave]+(i*8))]=rand(minturn, maxturn, rng); // turns until activation
//			rom[(scenEnemy[4][wave]+(i*8))]=rand(minGridX, maxGridX, rng); // x position
//			rom[(scenEnemy[5][wave]+(i*8))]=rand(minGridY, maxGridY, rng); // y position
//			rom[(scenEnemy[6][wave]+(i*8))]=Donotchangeyet;
		spoilLog = pushSpoilEnemy(spoilLog, rom, scenEnemy, wave, i);
	}
return [rom, spoilLog];
}
// let arr = [[]];
//for for ( i = 0; j < index; i+=0 ) {
//do {
//let v = math.rand();
//let w = math.rand();
//} while (arr[v][w]);   // Do executes any time arr[v][w] already exists, once it doesn't we set it to existing and move on
//arr[v][w] = 1;
// do whatever you wanted to do with v and w
//}



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
function allyRandomize(spoilLog, index, wave, scenAlly, pilots, mechs, rom, rng, minlevel, maxlevel, maxGridX, maxGridY, minGridX=0, minGridY=0)
{
	for ( let i = 0; i < index; i+=1)
	{
		let v = pick_rand(pilots, rng);
		rom[(scenAlly[0][wave]+(i*4))]=v//pilots
		if ( i > 0 && i < (index-1) ) {	  // -1 is due to Ryoma/Hayato/(Musashi/Benkei position) // These three pilots also have to have their setup dealt with elsewhere due to getter transitioning
			rom[(scenarioOneAlly[6][wave]+((i-1)*3))]=v;
		}
		rom[(scenAlly[1][wave]+(i*4))]=rand(minlevel, maxlevel, rng); //level
		rom[(scenAlly[2][wave]+(i*4))]=pick_rand(mechs, rng); //mechs 
//		rom[(scenAlly[3][wave]+(i*4))]=Donotchangeyet;
	}
//	rom[scenarioOneAlly[4][0]]=rand(minGridX, maxGridX, rng); // x position
//	rom[scenarioOneAlly[5][0]]=rand(minGridY, maxGridY, rng); // y position
//	for ( let i = 1; i < 10; i+=1)
//	{
//		rom[(scenAlly[4][0]+((i-1)*3))]=rand(minGridX, maxGridX, rng); // x position
//		rom[(scenAlly[5][0]+((i-1)*3))]=rand(minGridY, maxGridY, rng); // y position
//		rom[(scenAlly[6][0]+((i-1)*3))]=rom[scenarioOneAlly[0][0]+i*4];  // I believe I already set it up for the above
//	}
	return [rom, spoilLog];
}

//For getting pilots between stages

function newAllyPilot(index, scenAlly, pilots, rom, rng, minLevel, maxLevel)
{
	for ( let i = 0; i < index; i +=1)
	{
		rom[(scenAlly[0][0]+(i*2))] = pick_rand(pilots, rng);
		rom[(scenAlly[0][1]+(i*2))] = rand(minLevel, maxLevel, rng);
	}
}
