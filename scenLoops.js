
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
function enemyRandomize(spoilLog, index, wave, scenEnemy, pilots, mechs, rom, rng, arrgrid, minlevel, maxlevel, minturn, maxturn, maxGridX, maxGridY, minGridX=0, minGridY=0 )   
{
	let newX;
	let newY;
	for ( let i = 0; i < index; i+=1)
	{
		rom[(scenEnemy[0][wave]+(i*8))]=pick_rand(pilots, rng);  //Pilots
		rom[(scenEnemy[1][wave]+(i*8))]=rand(minlevel, maxlevel, rng);  //level
		rom[(scenEnemy[2][wave]+(i*8))]=pick_rand(mechs, rng); //mechs
		rom[(scenEnemy[3][wave]+(i*8))]=rand(minturn, maxturn, rng); // turns until activation
		if ( !(maxGridX == 0) )
		{
			do {
				newX=rand(minGridX, maxGridX, rng); // x position
				newY=rand(minGridY, maxGridY, rng); // y position
			}
			while ( arrgrid[newX][newY] == 1 || arrgrid[newX][newY] == 2  )
			arrgrid[newX][newY] = 2;
			rom[(scenEnemy[4][wave]+(i*8))]=newX; // x position
			rom[(scenEnemy[5][wave]+(i*8))]=newY; // y position
		}
//		rom[(scenEnemy[6][wave]+(i*8))]=Donotchangeyet;
		spoilLog = pushSpoilEnemy(spoilLog, rom, scenEnemy, wave, i);
	}
	return [rom, spoilLog, arrgrid];
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

function enemyDespawn ( spoilLog, despawnArray, rom, arrgrid, despawnAddr )
{
//	spoilLog += despawnArray[0] + ' ' + despawnArray[1] + ' ' + despawnArray[2] + ' ' + despawnArray[3] + '\n';
	for ( let j = 0; j < despawnAddr[0]; j+=1)
	{
//		spoilLog+= 'j = ' + j + ' ';
		for ( let k = 0; k < despawnAddr[(j+1)][0]; k+=1 )
		{
//			spoilLog += 'k = ' + k + ' ' + rom[despawnAddr[j+1][k+1]] + ' ' + despawnArray[j+1] + '\r\n';
			rom[despawnAddr[j+1][k+1]]=despawnArray[j+1];
//			spoilLog += rom[despawnAddr[j+1][k+1]] + ' ' + despawnArray[j+1];
		}
//		spoilLog += '\r\n';
	}
//	spoilLog += despawnArray[0] + ' ' + despawnArray[1] + ' ' + despawnArray[2] + ' ' + despawnArray[3] + '\n';
//	spoilLog += '\r\n';
	return [rom, spoilLog, arrgrid];
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
function allyRandomize(spoilLog, indexA, indexB, wave, scenAlly, pilots, mechs, rom, rng, arrgrid, minlevel, maxlevel, maxGridX, maxGridY, minGridX=0, minGridY=0)
{
	let v;
	let newX;
	let newY;
	for ( let i = 0; i < indexA; i+=1)
	{
		v = pick_rand(pilots, rng);
		rom[(scenAlly[0][wave]+(i*4))]=v;//pilots
		rom[(scenAlly[1][wave]+(i*4))]=rand(minlevel, maxlevel, rng); //level
		rom[(scenAlly[2][wave]+(i*4))]=pick_rand(mechs, rng); //mechs 
		if ( i < (indexB) ) {	  // -1 is due to Ryoma/Hayato/(Musashi/Benkei position) // These three pilots also have to have their setup dealt with elsewhere due to getter transitioning
			do {
				newX = rand(minGridX, maxGridX, rng);
				newY = rand(minGridY, maxGridY, rng);
			} while ( !(arrgrid[newX][newY] == 1) )
			arrgrid[newX][newY] = 0;
			rom[(scenAlly[4][wave]+((i)*3))]=newX; // x position
			rom[(scenAlly[5][wave]+((i)*3))]=newY; // y position
			spoilLog = pushSpoilAlly(spoilLog, rom, scenAlly, wave, i);
		} else {
		spoilLog += 'Extra pilot ' + stringPilot[v] + ' at level ' +  rom[(scenAlly[1][wave]+(i*4))] + ' in ' + stringMechs[rom[(scenAlly[2][wave]+(i*4))]] + '\r\n';
		}
//		rom[(scenAlly[3][wave]+(i*4))]=Donotchangeyet;
	}
	for ( i = 1; i <= indexB; i+=1)
	{
		rom[(scenAlly[6][wave]+((i-1)*3))]=rom[(scenAlly[0][wave]+(i*4))];
	}


	//	rom[scenarioOneAlly[4][0]]=rand(minGridX, maxGridX, rng); // x position
//	rom[scenarioOneAlly[5][0]]=rand(minGridY, maxGridY, rng); // y position
//	for ( let i = 1; i < 9; i+=1)
//	{
//		do {
//			newX = rand(minGridX, maxGridX, rng);
//			newY = rand(minGridY, maxGridY, rng);
//		} while ( !arrgrid[newX][newY] )
//		arrgrid[newX][newY] = 0;
//		rom[(scenAlly[4][0]+((i-1)*3))]=newX; // x position
//		rom[(scenAlly[5][0]+((i-1)*3))]=newY; // y position
//		rom[(scenAlly[6][0]+((i-1)*3))]=rom[scenarioOneAlly[0][0]+i*4];  // I believe I already set it up for the above
//	}
	return [rom, spoilLog, arrgrid];
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

function setGrid(arrgrid, x, y)
{
	for( i = 0; i <= x; i+=1)
	{
		arrgrid[i] = [];
		for( j = 0; j <= y; j+=1)
		{
			arrgrid[i][j] = 0;
		}
	}
	return arrgrid;
}


//Preserve the random area that Allies can spawn in
function setAllyAreaSquare(arrgrid, minX, minY, maxX, maxY)
{
	for(let x = minX; x <= maxX; x++)
	{
		for(let y = minY; y < maxY; y++)
		{
			arrgrid[x][y] = 1;
		}
	}
	return arrgrid;
}

//	for( let i = 0; i < randSplit[2].length; i++)  // for loop verified initial map size impression was incorrect - 23 x 23 grid not 22 x 23 grid
//	{
//		randSplit[1] += 'row ' + i + ' ';
//		for( let j = 0; j < randSplit[2][i].length; j++)
//		{
//			randSplit[1] += randSplit[2][i][j] + ', ';
//		}
//		randSplit[1] += '\r\n';
//	}