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
	01, 02, 03, 04, 05, 06, 08, 09, 0a, 0b, 0c, 0d, 0f, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1a, 1b, 1c, 1d, 1e, 1f, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 2a, 2b, 
	2c, 2d, 2e, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 3a, 3b, 3c, 3d, 3e, 3f, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 4a, 4b, 4c, 4d, 4e, 4f, 50, 51, 52, 53, 54, 55, 
	56, 57, 58, 59, 5a, 5b, 5c, 5d, 5e, 5f, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 6a, 6b, 6c, 6d, 6e, 6f, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 7a, 7b, 7c, 7d, 7e,
	7f, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 8a, 8b, 8c, 8d, 8e, 8f, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 9a, 9b, 9c, 9d, 9e, 9f, a0, a1, a2, a3, a4, a5, a6, a7,
	a8, a9, aa, ab, ac, ad, ae, af, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, be, bf, c0, c1, c2, c3, c4, C5, c6, c7, c8, c9 
]//2f has no map sprite and will cause major issues, bb-bd is created on death from ba

let fullAllyMechs = [
	01, 02, 03, 04, 05, 06, 08, 09, 0a, 0b, 0c, 0d, 0f, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1a, 1b, 1c, 1d, 1e, 1f, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 2a, 2b, 
	2c, 2d, 2e, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 3a, 3b, 3c, 3d, 3e, 3f, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 4a, 4b, 4c, 4d, 4e, 4f, 50, 51, 52, 53, 54, 55, 
	56, 57, 58, 59, 5a, 5b, 5c, 5d, 5e, 5f, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 6a, 6b, 6c, 6d, 6e, 6f, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 7a, 7b, 7c, 7d, 7e,
	7f, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 8a, 8b, 8c, 8d, 8e, 8f, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 9a, 9b, 9c, 9d, 9e, 9f, a0, a1, a2, a3, a4, a5, a6, a7,
	a8, a9, aa, ab, ac, ad, ae, af, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, be, bf, c0, c1, c2, c3, c4, C5, c6, c7, c8, c9 
]//2f has no map sprite and will cause major issues, bb-bd is created on death from ba

let pilotList = [
	
	03, 04, 05, 06, 07, 08, 09, 0a, 0b, 0c, 0d, 0e, 0f, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1a, 1b, 1c, 1d, 1e, 1f, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 2a, 2b, 2c,
	2d, 2e, 2f, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 3a, 3b, 3c, 3d, 3e, 3f, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 4a, 4b, 4c, 4d, 4e, 4f, 50, 51, 52, 53, 54, 55, 56,
	57, 58, 59, 5a, 5b, 5c, 5d, 5e, 5f, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 6a, 6b, 6c, 6d, 6e, 6f, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 7a, 7b, 7c, 7d, 7e, 7f, 80,
	81, 82, 83, 84, 85, 86, 87, 88, 89, 8a, 8b, 8c, 8d, 8e, 8f, 90, 91, /*92,  93,*/ 94, /*95, */ 96, 97, 98, 99, 9a, 9b, 9c, 9d, 9e, 9f, a0, a1, a2, a3, a4, a5, a6, a7, 
	a8, a9, aa, ab, ac, ad, ae, af, b0 
]



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
]
	
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
]
	

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

	//scenario 1
	//on scenario start
	for ( let i = 0; i < 15; i+=1)
	{
		rom[scenarioOneEnemy[0][0]+i*8]=pilotList[math.floor( rng() * pilotList.length()];  //Pilots
		rom[scenarioOneEnemy[0][1]+i*8]=math.floor( rng() * 12);  //level
		rom[scenarioOneEnemy[0][2]+i*8]=fullEnemyMechs[math.floor( rng() * fullEnemyMechs.length()]; //mechs
		rom[scenarioOneEnemy[0][3]+i*8]=math.floor( rng() * 5 ); // turns until activation
//		rom[scenarioOneEnemy[0][4]+i*8]=math.floor( rng() * 23 ); // x position
//		rom[scenarioOneEnemy[0][5]+i*8]=math.floor( rng() * 23 ); // y position
//		rom[scenarioOneEnemy[0][6]+i*8]=Donotchangeyet;
	}

	//first set of reinforcements
	for ( let i = 0; i < 3; i+=1)
	{
		rom[scenarioOneEnemy[1][0]+i*8]=pilotList[math.floor( rng() * pilotList.length()];  //Pilots
		rom[scenarioOneEnemy[1][1]+i*8]=math.floor( rng() * 12);  //level
		rom[scenarioOneEnemy[1][2]+i*8]=fullEnemyMechs[math.floor( rng() * fullEnemyMechs.length()]; //mechs
		rom[scenarioOneEnemy[1][3]+i*8]=math.floor( rng() * 5 ); // turns until activation
//		rom[scenarioOneEnemy[1][4]+i*8]=math.floor( rng() * 23 ); // x position
//		rom[scenarioOneEnemy[1][5]+i*8]=math.floor( rng() * 23 ); // y position
//		rom[scenarioOneEnemy[1][6]+i*8]=Donotchangeyet;
	}

	//ally spawn
	for ( let i = 0; i < 10;i+=1)
	{
		rom[scenarioOneAlly[0][0]+i*4]=pilotList[math.floor( rng() * pilotList.length()]; //pilots
		rom[scenarioOneAlly[0][1]+i*4]=math.floor( rng() * 7); //level
		rom[scenarioOneAlly[0][2]+i*4]=fullAllyMechs[math.floor( rng() * fullAllyMechs.length()]; //mechs 
//		rom[scenarioOneAlly[0][3]+i*4]=Donotchangeyet;
	}
//	rom[scenarioOneAlly[0][4]=math.floor(rng()*23); // x position
//	rom[scenarioOneAlly[0][5]=math.floor(rng()*23); // y position
	for ( let i = 1; < 10;i+=1)
	{
//		rom[scenarioOneAlly[0][4]+i*3-1]=math.floor(rng()*23); // x position
//		rom[scenarioOneAlly[0][5]+i*3-1]=math.floor(rng()*23); // y position
		rom[scenarioOneAlly[0][6]+i*3-1]=rom[scenarioOneAlly[0][0]+i*4];
	}
	
	
	
	
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