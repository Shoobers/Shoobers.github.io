// don't think I need conv
/*let conv = function(bank, addr) {
  return bank*0x2000+addr;
}*/
/* keeping for example reasons
let fightSlots = [
  ['freeonFight', conv(0x7, 0x1014), null],
  ['shadesFight', conv(0x7, 0x1060), ['swim']],
  ['gilFight', conv(0x7, 0x10ac), ['suction', 'swim']]
]; */
/* Keeping for example reasons
// reqs - suction, gil, bombs, ice, bopsSpecial, swim, freeon, shades
let chestSlots = [
  ['snowArea_byChimney', ['suction', 'gil']],
  ['startingArea_belowWater', ['gil']],
  ['darkArea_inPit', ['suction', 'gil', 'bombs']],
  ['westCliffsArea_floatingIslandTopCave', ['suction', 'gil', 'bombs']],
  ['lavaChallenge_acrossIce', ['gil', 'bombs', 'freeon', 'ice', 'bopsSpecial']],
  ['darkArea_pastMiniboss', ['suction', 'gil', 'bombs']],
  ['westCliffsArea_hiddenDoor', ['suction', 'swim']],
  ['startingArea_pastMiniboss', ['swim']],
  ['snowArea_deepestRoom', ['suction', 'freeon', 'gil']],
  ['belowCloudsArea_shadesHover', ['swim', 'shades']],
  ['faucetArea_pastMiniboss', ['gil']],
  ['cloudsArea_pastMiniboss', ['swim', 'shades']],
  ['startingArea_hill', null],
  ['belowCloudsArea_byLongDrop', ['swim']],
  ['caveArea_alcoveNearPool', ['swim']],
  ['caveArea_inPool', ['gil']],
  ['faucetArea_inWaterColumn', ['gil']],
  ['caveArea_pastLavaHopping', ['freeon', 'ice']],
  ['darkArea_byLight', ['suction', 'gil', 'bombs']],
  ['lavaChallenge_climbingIce', ['gil', 'bombs', 'freeon', 'ice', 'shades']],
  ['cloudsArea_startingAfterSpring', ['swim', 'shades'], ['swim', 'suction']],
  ['faucetArea_aboveFaucetCave', ['freeon', 'suction'], ['gil', 'bombs', 'suction']],
  ['westCliffsArea_inBigWaterRoom', ['suction', 'gil']],
  ['finalBossCorridor', ['suction'], ['swim']],
]*/

/* Keeping for example reasons
let treasures = [
  {
    name: 'freeon',
    text: 0x01,
    globalFlag: 0x08,
    chrBank: null,
    spriteSpecIdx: 0x30,
    palettesIdx: 0x01
  },
]
*/

/* keeping for example reasons
let textPageContinuesToReplace = [
  conv(0x01, 0x0fa4), // seeing freeon
  conv(0x01, 0x1047), // beating freeon
  conv(0x01, 0x10d3), // seeing shades
  conv(0x01, 0x114c), // beating shades
  conv(0x01, 0x11f8), // seeing gil
  conv(0x01, 0x12b1), // beating gil
  conv(0x01, 0x1577), // save crystal
  conv(0x01, 0x15c9), // map
  conv(0x01, 0x1613), // compass
  conv(0x01, 0x165a), // heart container
  conv(0x01, 0x16be), // suction cup
  conv(0x01, 0x1727), // bop's special
  conv(0x01, 0x1794), // power ring
  conv(0x01, 0x17e3), // medicine
  conv(0x01, 0x182c), // water of life
  conv(0x01, 0x188b), // insight
  conv(0x01, 0x18e9), // shade's special
  conv(0x01, 0x1964), // freeon's special
  conv(0x01, 0x19d6), // gil's special
] */

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
	0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90, 0x91, /*0x92, 0x93,*/ 0x94, /*0x95, */ 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 
	0xaa, 0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0
];



let scenarioOneEnemy = [ // sixteen initial, 4 reinforcement
	//Pilots 
	[
	0x068262, //Char
	0x07ba90,
	],
	//levels
	[
	0x068263, //Char
	0x07ba91,
	],
	//mechs
	[
	0x068264, //Char
	0x07ba92,
	],
	//turnstoactivation
	[
	0x068265, //Char
	0x07ba93,
	],
	//X position max x17
	[
	0x068260, //Char
	0x07ba8e,
	],
	//Y position max x17
	[
	0x068261, //Char
	0x07ba8f,
	],
	
	//color and team
	[
	0x068267, //Char
	0x07ba95,
	]
];
	
let scenarioOneAlly = [  // 11 long
	//Pilot
	[
	0x0682e4, //Bright
	],
	//level
	[
	0x0682e5
	],
	//mech
	[
	0x0682e6
	],
	//color and allegience?
	[
	0x0682e7
	],
	//x position  ** remember, first slot is 2 bytes, everything after is 3 bytes!! max x17
	[
	0x068312
	],
	//y position max x17
	[
	0x068313
	]
	//pilot pointer  ** do not use until second loop
	[
	0x068316
	]
];
	

function randomize(rom, rng, opts) {
  // build slots to mutate
/*  let r_slots = {};

  for (let i = 0; i < 3; i += 1) {
    r_slots[fightSlots[i][0]] = {
      text: conv(0xa, 0x11d1+i),
      globalFlag: [conv(0xa, 0x120a+i), fightSlots[i][1]],

      treasure: null,
      reqs: fightSlots[i].slice(2)
    }
  }

  for (let i = 0; i < chestSlots.length; i += 1) {
    r_slots[chestSlots[i][0]] = {
      text: conv(0xa, 0x1dbb+i),
      globalFlag: [conv(0x7, 0x048e+i*2)],

      chrBank: conv(0x7, 0x048f+i*2),
      spriteSpecIdx: conv(0xa, 0x1d76+i*2),
      palettesIdx: conv(0xa, 0x1d77+i*2),

      treasure: null,
      reqs: chestSlots[i].slice(1)
    }
  }
*/

/*	//scenario 1
	//on scenario start
	for ( let i = 0; i < 15; i+=1)
	{
		rom[scenarioOneEnemy[0][0]+i*8]=pilotList[math.floor( rng() * pilotList.length())];  //Pilots
		rom[scenarioOneEnemy[0][1]+i*8]=math.floor( rng() * 12);  //level
		rom[scenarioOneEnemy[0][2]+i*8]=fullEnemyMechs[math.floor( rng() * fullEnemyMechs.length())]; //mechs
		rom[scenarioOneEnemy[0][3]+i*8]=math.floor( rng() * 5 ); // turns until activation
//		rom[scenarioOneEnemy[0][4]+i*8]=math.floor( rng() * 23 ); // x position
//		rom[scenarioOneEnemy[0][5]+i*8]=math.floor( rng() * 23 ); // y position
//		rom[scenarioOneEnemy[0][6]+i*8]=Donotchangeyet;
	}

	//first set of reinforcements
	for ( let i = 0; i < 3; i+=1)
	{
		rom[scenarioOneEnemy[1][0]+i*8]=pilotList[math.floor( rng() * pilotList.length())];  //Pilots
		rom[scenarioOneEnemy[1][1]+i*8]=math.floor( rng() * 12);  //level
		rom[scenarioOneEnemy[1][2]+i*8]=fullEnemyMechs[math.floor( rng() * fullEnemyMechs.length())]; //mechs
		rom[scenarioOneEnemy[1][3]+i*8]=math.floor( rng() * 5 ); // turns until activation
//		rom[scenarioOneEnemy[1][4]+i*8]=math.floor( rng() * 23 ); // x position
//		rom[scenarioOneEnemy[1][5]+i*8]=math.floor( rng() * 23 ); // y position
//		rom[scenarioOneEnemy[1][6]+i*8]=Donotchangeyet;
	}

	//ally spawn
	for ( let i = 0; i < 10; i+=1)
	{
		rom[scenarioOneAlly[0][0]+i*4]=pilotList[math.floor( rng() * pilotList.length())]; //pilots
		rom[scenarioOneAlly[0][1]+i*4]=math.floor( rng() * 7); //level
		rom[scenarioOneAlly[0][2]+i*4]=fullAllyMechs[math.floor( rng() * fullAllyMechs.length())]; //mechs 
//		rom[scenarioOneAlly[0][3]+i*4]=Donotchangeyet;
	}
//	rom[scenarioOneAlly[0][4]=math.floor(rng()*23); // x position
//	rom[scenarioOneAlly[0][5]=math.floor(rng()*23); // y position
	for ( let i = 1; i < 10; i+=1)
	{
//		rom[scenarioOneAlly[0][4]+i*3-1]=math.floor(rng()*23); // x position
//		rom[scenarioOneAlly[0][5]+i*3-1]=math.floor(rng()*23); // y position
		rom[scenarioOneAlly[0][6]+i*3-1]=rom[scenarioOneAlly[0][0]+i*4];
	}
*/	
	
	
	
  // get treasure details and names
/*  let treasureMap = {};
  let treasureNames = [];
  for (let i = 0; i < treasures.length; i += 1) {
    treasureMap[treasures[i].name] = treasures[i];
    treasureNames.push(treasures[i].name);
  }*/

  // loop until rom randomized
/*  let spheres = [];
  let unobtainable = [];

  while (true) {
    // clear current attached treasures
    for (let [k, v] of Object.entries(r_slots)) {
      r_slots[k].treasure = null;
    }

    // randomly fill slots with treasure
    let available_treasures = [...treasureNames];
    let available_slots = Object.keys(r_slots);
    for (let i = 0; i < treasureNames.length; i += 1) {
      let chosen_treasure = Math.floor(rng() * available_treasures.length);
      let chosen_slot = Math.floor(rng() * available_slots.length);
      r_slots[available_slots[chosen_slot]].treasure = available_treasures[chosen_treasure];
      available_treasures.splice(chosen_treasure, 1);
      available_slots.splice(chosen_slot, 1);
    }
*/
    // validate logic
/*    let outstanding_places = Object.keys(r_slots);
    let gotten_items = [];
    spheres = [];

    // loop until all items gotten, or none reached
    while (true) {
      let reached_locations_this_sphere = [];

      // loop through outstanding places this sphere
      for (let i = 0; i < outstanding_places.length; i += 1) {
        let place_reqs = r_slots[outstanding_places[i]].reqs;

        // loop through 1 of many possible reqs
        for (let j = 0; j < place_reqs.length; j += 1) {
          let curr_req = place_reqs[j];
          let meet_all_curr_reqs = true;

          // loop through items required
          if (curr_req !== null) {
            for (let k = 0; k < curr_req.length; k += 1) {
              if (gotten_items.indexOf(curr_req[k]) === -1) {
                meet_all_curr_reqs = false;
                break;
              }
            }
          }

          if (meet_all_curr_reqs) {
            reached_locations_this_sphere.push(outstanding_places[i]);
            break;
          }
        }
      }

      // copy reached items to gotten items, or bail if nothing reachable this sphere
      if (reached_locations_this_sphere.length === 0) {
        break;
      } else {
        // add sphere details
        let sphere_locs = [];
        for (let i = 0; i < reached_locations_this_sphere.length; i += 1)
          sphere_locs.push([reached_locations_this_sphere[i], r_slots[reached_locations_this_sphere[i]].treasure]);
        sphere_locs.sort((a, b) => (a[0] > b[0]) ? 1 : -1);
        spheres.push(sphere_locs);

        for (let i = 0; i < reached_locations_this_sphere.length; i += 1) {
          let place = reached_locations_this_sphere[i];
          outstanding_places.splice(outstanding_places.indexOf(place), 1);
          let gotten_item = r_slots[place].treasure;
          if (gotten_item === 'freeon' || gotten_item === 'gil')
            gotten_items.push('swim');
          gotten_items.push(gotten_item);
        }
      }
    }
*/
    // success condition
/*    let successfully_randomized = false;
    if (gotten_items.indexOf('blueKey') !== -1 &&
      gotten_items.indexOf('greenKey') !== -1 &&
      gotten_items.indexOf('redKey') !== -1 &&
      (gotten_items.indexOf('freeon') !== -1 || gotten_items.indexOf('suction') !== -1))
      successfully_randomized = true;

    if (!successfully_randomized)
      continue;

    // gen unobtainable sphere
    for (let i = 0; i < outstanding_places.length; i += 1) {
      unobtainable.push([outstanding_places[i], r_slots[outstanding_places[i]].treasure]);
    }
    unobtainable.sort((a, b) => (a[0] > b[0]) ? 1 : -1);
    break;
  }
*/
  // mutate slots
/*  for (let [k, v] of Object.entries(r_slots)) {
    let slot_treasure = treasureMap[r_slots[k].treasure];
    rom[v.text] = slot_treasure.text;
    for (let i = 0; i < v.globalFlag.length; i += 1)
      rom[v.globalFlag[i]] = slot_treasure.globalFlag;
    if (v.chrBank !== undefined) {
      if (slot_treasure.chrBank !== null)
        rom[v.chrBank] = slot_treasure.chrBank;
      rom[v.spriteSpecIdx] = slot_treasure.spriteSpecIdx;
      rom[v.palettesIdx] = slot_treasure.palettesIdx;
    }
  }*/

  // mutate qol - shorter text
/*  if (opts.romType !== 'JP') {
    for (let i = 0; i < textPageContinuesToReplace.length; i += 1)
      rom[textPageContinuesToReplace[i]] = 0xff;
  }*/

  // todo: mutate qol - no dialog entities
  // bug: this prevents platforms from appearing
  // rom[conv(0x0b, 0x0ffd)] = 0x60;

  // return spheres with loc + items details, and rom
  return [/*spheres, unobtainable, */rom];
}