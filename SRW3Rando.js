

let fullEnemyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba

let fullAllyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba

let pilotList = [
	0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 
	0x3b, 0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56,
	0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 
	0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90, 0x91, /*0x92, 0x93,*/ 0x94, /*0x95,  0x96, */ 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 
	0xaa, 0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0
];



let scenarioOneEnemy = [ // sixteen initial, 4 reinforcement
	//Pilots 
	[
	0x030262, //Char
	0x03ba90
	],
	//levels
	[
	0x030263, //Char
	0x03ba91
	],
	//mechs
	[
	0x030264, //Char
	0x03ba92
	],
	//turnstoactivation
	[
	0x030265, //Char
	0x03ba93
	],
	//X position max x17
	[
	0x030260, //Char
	0x03ba8e
	],
	//Y position max x17
	[
	0x030261, //Char
	0x03ba8f
	],
	
	//color and team
	[
	0x030267, //Char
	0x03ba95
	]
];
	
let scenarioOneAlly = [  // 11 long
	//Pilot
	[
	0x0302e4 //Bright
	],
	//level
	[
	0x0302e5
	],
	//mech
	[
	0x0302e6
	],
	//color and allegience?
	[
	0x0302e7
	],
	//x position  ** remember, first slot is 2 bytes, everything after is 3 bytes!! max x17
	[
	0x030312
	],
	//y position max x17
	[
	0x030313
	],
	//pilot pointer  ** do not use until second loop
	[
	0x030316
	]
];
	

function randomize(rom, rng, opts) {

	
	//scenario 1
	//on scenario start
	for ( let i = 0; i < 15; i+=1)
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
		rom[(scenarioOneEnemy[1][1]+(i*8))]=(Math.floor( rng() * 12)+1);  //level
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