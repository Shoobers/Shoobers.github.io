/*let fullEnemyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba */
let spaceEnemyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, /*0x14,*/ 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, /*0x39,*/ 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, /*0x50,*/ 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, /*0x5e,*/ 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, /*0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f,*/ 0xa0, 0xa1, 0xa2, /*0xa3,*/ 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, /*0xa9,*/ 0xaa, 0xab, 0xac, 0xad, /*0xae,*/ 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, /*0xb9,*/ 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba

let groundEnemyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, /*0x0b, 0x0c,*/ 0x0d, 0x0f, 0x10, 0x11, /*0x12, 0x13,*/ 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, /*0x4c,*/ 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, /*0x5b,*/ 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, /*0x86, 0x87, 0x88,*/ 0x89, 0x8a, 0x8b, 0x8c, 0x8d, /*0x8e,*/ 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, /*0xb5, 0xb6, 0xb7,*/ 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba


/*let fullAllyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba*/

let spaceAllyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, /*0x14,*/ 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, /*0x39,*/ 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, /*0x50,*/ 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, /*0x5e,*/ 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, /*0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f,*/ 0xa0, 0xa1, 0xa2, /*0xa3,*/ 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, /*0xa9,*/ 0xaa, 0xab, 0xac, 0xad, /*0xae,*/ 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, /*0xb9,*/ 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 ];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba
let groundAllyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, /*0x0b, 0x0c,*/ 0x0d, 0x0f, 0x10, 0x11, /*0x12, 0x13,*/ 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, /*0x4c,*/ 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, /*0x5b,*/ 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, /*0x86, 0x87, 0x88,*/ 0x89, 0x8a, 0x8b, 0x8c, 0x8d, /*0x8e,*/ 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, /*0xb5, 0xb6, 0xb7,*/ 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba


let pilotList = [
	0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 
	0x3b, 0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56,
	0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 
	0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 0x90, 0x91, /*0x92, 0x93,*/ 0x94, /*0x95,  0x96, */ 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 
	0xaa, 0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0
];



let scenarioOneEnemy = [ // 16 initial, 5 reinforcement
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

let scenarioTwoEnemy = [ // sixteen initial, doubt there's reinforcements
//Pilots 
	[
	0x030330, 
//	0x03ba90
	],
	//levels
	[
	0x030331, 
//	0x03ba91
	],
//	//mechs
	[
	0x030332, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030333, 
//	0x03ba93
	],
	//X position max x17
	[
	0x03032e, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x03032f, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030335, 
//	0x03ba95
	]
];

let scenarioThreeEnemy = [ // 16 initial, doubt there's reinforcements
//Pilots 
	[
	0x0303c2, 
//	0x03ba90
	],
	//levels
	[
	0x0303c3, 
//	0x03ba91
	],
//	//mechs
	[
	0x0303c4, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x0303c5, 
//	0x03ba93
	],
	//X position max x17
	[
	0x0303c0, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0303c1, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x0303c7, 
//	0x03ba95
	]
];

let scenarioFourEnemy = [ // 26 initial, doubt there's reinforcements
//Pilots 
	[
	0x03044c, 
//	0x03ba90
	],
	//levels
	[
	0x03044d, 
//	0x03ba91
	],
//	//mechs
	[
	0x03044e, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x03044f, 
//	0x03ba93
	],
	//X position max x17
	[
	0x03044a, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x03044b, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030451, 
//	0x03ba95
	]
];

let scenarioFiveEnemy = [ // 26 initial, doubt there's reinforcements
//Pilots 
	[
	0x030526, 
//	0x03ba90
	],
	//levels
	[
	0x030527, 
//	0x03ba91
	],
//	//mechs
	[
	0x030528, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030529, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030524, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030525, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x03052b, 
//	0x03ba95
	]
];

let scenarioSixEnemy = [ // 16 initial, doubt there's reinforcements
//Pilots 
	[
	0x030600, 
//	0x03ba90
	],
	//levels
	[
	0x030601, 
//	0x03ba91
	],
//	//mechs
	[
	0x030602, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030603, 
//	0x03ba93
	],
	//X position max x17
	[
	0x0305fe, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0305ff, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030605, 
//	0x03ba95
	]
];

let scenarioSevenEnemy = [ // 12 initial, doubt there's reinforcements
//Pilots 
	[
	0x03068A, 
//	0x03ba90
	],
	//levels
	[
	0x03068B, 
//	0x03ba91
	],
//	//mechs
	[
	0x03068C, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x03068D, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030688, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030689, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x03068F, 
//	0x03ba95
	]
];


let scenarioEightEnemy = [ // 12 initial, doubt there's reinforcements
//Pilots 
	[
	0x03068A, 
//	0x03ba90
	],
	//levels
	[
	0x03068B, 
//	0x03ba91
	],
//	//mechs
	[
	0x03068C, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x03068D, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030688, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030689, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x03068F, 
//	0x03ba95
	]
];

let scenarioNineEnemy = [ // 16 initial, doubt there's reinforcements
//Pilots 
	[
	0x030702, 
//	0x03ba90
	],
	//levels
	[
	0x030703, 
//	0x03ba91
	],
//	//mechs
	[
	0x030704, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030705, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030700, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030701, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030707, 
//	0x03ba95
	]
];

let scenarioTenEnemy = [ // 2 initial, definitely reinforcements //scenario 14
//Pilots 
	[
	0x030796, 
//	0x03ba90
	],
	//levels
	[
	0x030797, 
//	0x03ba91
	],
//	//mechs
	[
	0x030798, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030799, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030794, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030795, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x03079b, 
//	0x03ba95
	]
];

let scenarioElevenEnemy = [ // 6 initial, definitely reinforcements
//Pilots 
	[
	0x0307c4, 
//	0x03ba90
	],
	//levels
	[
	0x0307c5, 
//	0x03ba91
	],
//	//mechs
	[
	0x0307c6, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x0307c7, 
//	0x03ba93
	],
	//X position max x17
	[
	0x0307c2, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0307c3, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x0307c9, 
//	0x03ba95
	]
];

let scenarioTwelveEnemy = [ // 11 initial, definitely reinforcements 
//Pilots 
	[
	0x030820, 
//	0x03ba90
	],
	//levels
	[
	0x030821, 
//	0x03ba91
	],
//	//mechs
	[
	0x030822, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030823, 
//	0x03ba93
	],
	//X position max x17
	[
	0x03081e, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x03081f, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030825, 
//	0x03ba95
	]
];

let scenarioThirteenEnemy = [ // 26 initial, definitely reinforcements 
//Pilots 
	[
	0x030897, 
//	0x03ba90
	],
	//levels
	[
	0x030898, 
//	0x03ba91
	],
//	//mechs
	[
	0x030899, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x03089a, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030895, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030896, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x03089c, 
//	0x03ba95
	]
];

let scenarioFourteenEnemy = [ // 27 initial, 
//Pilots 
	[
	0x030975, 
//	0x03ba90
	],
	//levels
	[
	0x030996, 
//	0x03ba91
	],
//	//mechs
	[
	0x030997, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030998, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030993, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030994, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x03099a, 
//	0x03ba95
	]
];

let scenarioFifteenEnemy = [ // 18 initial, definitely reinforcements 
//Pilots 
	[
	0x030a57, 
//	0x03ba90
	],
	//levels
	[
	0x030a58, 
//	0x03ba91
	],
//	//mechs
	[
	0x030a59, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030a5a, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030a55, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030a56, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030a5c, 
//	0x03ba95
	]
];

let scenarioSixteenEnemy = [ // 34 initial, definitely reinforcements 
//Pilots 
	[
	0x030af1, 
//	0x03ba90
	],
	//levels
	[
	0x030af2, 
//	0x03ba91
	],
//	//mechs
	[
	0x030af3, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030af4, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030aef, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030af0, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030af6, 
//	0x03ba95
	]
];

let scenarioSeventeenEnemy = [ // 25 initial, definitely reinforcements 
//Pilots 
	[
	0x030c0b, 
//	0x03ba90
	],
	//levels
	[
	0x030c0c, 
//	0x03ba91
	],
//	//mechs
	[
	0x030c0d, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030c0e, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030c09, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030c0a, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030c10, 
//	0x03ba95
	]
];

let scenarioEighteenEnemy = [ // 25 initial, definitely reinforcements 
//Pilots 
	[
	0x030cdf, 
//	0x03ba90
	],
	//levels
	[
	0x030ce0, 
//	0x03ba91
	],
//	//mechs
	[
	0x030ce1, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030ce2, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030cdd, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030cde, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030ce4, 
//	0x03ba95
	]
];


let scenarioNineteenEnemy = [ // 22 initial, definitely reinforcements 
//Pilots 
	[
	0x030d9b, 
//	0x03ba90
	],
	//levels
	[
	0x030d9c, 
//	0x03ba91
	],
//	//mechs
	[
	0x030d9d, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030d9e, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030d99, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030d9a, 
//	0x03ba8f
	],
	
	//color and team
	[
	0x030da0, 
//	0x03ba95
	]
];

let scenarioTwentyEnemy = [ // 20 initial,  Something is wrong with this table  // I think because Gato is an optional unit he skews the table?  Scenario 30.   0984 trigger for char convince?  // wave 1 represents after trigger 9 initial   
//Pilots 
	[
	0x030e55, 
	0x030f99,
//	0x03ba90
	],
	//levels
	[
	0x030e56,
	0x030f9a,
//	0x03ba91
	],
//	//mechs
	[
	0x030e57, 
	0x030f9b,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030e58, 
	0x030f9c,
//	0x03ba93
	],
	//X position max x17
	[
	0x030e53, 
	0x030f97,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030e54, 
	0x030f98,
//	0x03ba8f
	],
	
	//color and team
	[
	0x030e5a, 
	0x030fae,
//	0x03ba95
	]
];

let scenarioTwentyAEnemy = [ // 2 initial,  unsure why these two are isolated 
//Pilots 
	[
	0x030fef, 
//	0x03ba90
	],
	//levels
	[
	0x030ff0,
//	0x03ba91
	],
//	//mechs
	[
	0x030ff1, 
//	0x03ba92
	],
	//turnstoactivation
	[
	0x030ff2, 
//	0x03ba93
	],
	//X position max x17
	[
	0x030fed, 
//	0x03ba8e
	],
	//Y position max x17
	[
	0x030fee, 
//	0x03ba8f
	],
	//color and team
	[
	0x030ff4, 
//	0x03ba95
	]
];

let scenarioTwentyOneEnemy = [ // 1 initial, Lune's scenario
//Pilots 
	[
	0x031009,
//	0x03ba90
	],
	//levels
	[
	0x03100a,
//	0x03ba91
	],
//	//mechs
	[
	0x03100b,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x03100c,
//	0x03ba93
	],
	//X position max x17
	[
	0x031007,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x031008,
//	0x03ba8f
	],
	//color and team
	[
	0x03100e,
//	0x03ba95
	]
];


let scenarioTwentyTwoEnemy = [ // 27 initial, 
//Pilots 
	[
	0x03101b,
//	0x03ba90
	],
	//levels
	[
	0x03101c,
//	0x03ba91
	],
//	//mechs
	[
	0x03101d,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x03101e,
//	0x03ba93
	],
	//X position max x17
	[
	0x031019,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x03101a,
//	0x03ba8f
	],
	//color and team
	[
	0x031020,
//	0x03ba95
	]
];

let scenarioTwentyThreeEnemy = [ // 12 initial, 
//Pilots 
	[
	0x031105,
//	0x03ba90
	],
	//levels
	[
	0x031106,
//	0x03ba91
	],
//	//mechs
	[
	0x031107,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x031108,
//	0x03ba93
	],
	//X position max x17
	[
	0x031103,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x031104,
//	0x03ba8f
	],
	//color and team
	[
	0x03110a,
//	0x03ba95
	]
];

let scenarioTwentyFourEnemy = [ // 30 initial, 
//Pilots 
	[
	0x031178,
//	0x03ba90
	],
	//levels
	[
	0x031179,
//	0x03ba91
	],
//	//mechs
	[
	0x03117a,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x03117b,
//	0x03ba93
	],
	//X position max x17
	[
	0x031176,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x031177,
//	0x03ba8f
	],
	//color and team
	[
	0x03117d,
//	0x03ba95
	]
];

let scenarioTwentyFiveEnemy = [ // 21 initial, 
//Pilots 
	[
	0x031272,
//	0x03ba90
	],
	//levels
	[
	0x031273,
//	0x03ba91
	],
//	//mechs
	[
	0x031274,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x031275,
//	0x03ba93
	],
	//X position max x17
	[
	0x031270,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x031271,
//	0x03ba8f
	],
	//color and team
	[
	0x031277,
//	0x03ba95
	]
];

let scenarioTwentyFiveAEnemy = [ // 1 initial, unsure of why this split, there' sa low number of midtable stuff this is one of them
//Pilots 
	[
	0x0312ac,
//	0x03ba90
	],
	//levels
	[
	0x0312ad,
//	0x03ba91
	],
//	//mechs
	[
	0x0312ae,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x0312af,
//	0x03ba93
	],
	//X position max x17
	[
	0x0312aa,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0312ab,
//	0x03ba8f
	],
	//color and team
	[
	0x0312b1,
//	0x03ba95
	]
];

let scenarioTwentySixEnemy = [ // 31 initial, 
//Pilots 
	[
	0x03132c,
//	0x03ba90
	],
	//levels
	[
	0x03132d,
//	0x03ba91
	],
//	//mechs
	[
	0x03132e,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x03132f,
//	0x03ba93
	],
	//X position max x17
	[
	0x03132a,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x03132b,
//	0x03ba8f
	],
	//color and team
	[
	0x031331,
//	0x03ba95
	]
];

let scenarioTwentySevenEnemy = [ // 22 initial, 
//Pilots 
	[
	0x03142e,
//	0x03ba90
	],
	//levels
	[
	0x03142f,
//	0x03ba91
	],
//	//mechs
	[
	0x031430,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x031431,
//	0x03ba93
	],
	//X position max x17
	[
	0x03142c,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x03142d,
//	0x03ba8f
	],
	//color and team
	[
	0x031433,
//	0x03ba95
	]
];

let scenarioTwentyEightEnemy = [ // 35 initial, 
//Pilots 
	[
	0x0314f6,
//	0x03ba90
	],
	//levels
	[
	0x0314f7,
//	0x03ba91
	],
//	//mechs
	[
	0x0314f8,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x0314f9,
//	0x03ba93
	],
	//X position max x17
	[
	0x0314f4,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0314f5,
//	0x03ba8f
	],
	//color and team
	[
	0x0314fb,
//	0x03ba95
	]
];

let scenarioTwentyNineEnemy = [ // 22 initial, 
//Pilots 
	[
	0x0314f6,
//	0x03ba90
	],
	//levels
	[
	0x0314f7,
//	0x03ba91
	],
//	//mechs
	[
	0x0314f8,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x0314f9,
//	0x03ba93
	],
	//X position max x17
	[
	0x0314f4,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0314f5,
//	0x03ba8f
	],
	//color and team
	[
	0x0314fb,
//	0x03ba95
	]
];

let scenarioThirtyEnemy = [ // 34 initial, 
//Pilots 
	[
	0x0315d2,
//	0x03ba90
	],
	//levels
	[
	0x0315d3,
//	0x03ba91
	],
//	//mechs
	[
	0x0315d4,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x0315d5,
//	0x03ba93
	],
	//X position max x17
	[
	0x0315d0,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0315d1,
//	0x03ba8f
	],
	//color and team
	[
	0x0315d7,
//	0x03ba95
	]
];

let scenarioThirtyOneEnemy = [ // 29 initial, 
//Pilots 
	[
	0x0317ec,
//	0x03ba90
	],
	//levels
	[
	0x0317ed,
//	0x03ba91
	],
//	//mechs
	[
	0x0317ee,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x0317ef,
//	0x03ba93
	],
	//X position max x17
	[
	0x0317ea,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0317eb,
//	0x03ba8f
	],
	//color and team
	[
	0x0317f1,
//	0x03ba95
	]
];


let scenarioThirtyTwoEnemy = [ // 31 initial, 
//Pilots 
	[
	0x0318de,
//	0x03ba90
	],
	//levels
	[
	0x0318df,
//	0x03ba91
	],
//	//mechs
	[
	0x0318e0,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x0318e1,
//	0x03ba93
	],
	//X position max x17
	[
	0x0318dc,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0318dd,
//	0x03ba8f
	],
	//color and team
	[
	0x0318e3,
//	0x03ba95
	]
];

let scenarioThirtyThreeEnemy = [ // 23 initial, 
//Pilots 
	[
	0x0319ea,
//	0x03ba90
	],
	//levels
	[
	0x0319eb,
//	0x03ba91
	],
//	//mechs
	[
	0x0319ec,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x0319ed,
//	0x03ba93
	],
	//X position max x17
	[
	0x0319e8,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x0319e9,
//	0x03ba8f
	],
	//color and team
	[
	0x0319ef,
//	0x03ba95
	]
];

let scenarioThirtyFourEnemy = [ // 19 initial, 
//Pilots 
	[
	0x031aac,
//	0x03ba90
	],
	//levels
	[
	0x031aad,
//	0x03ba91
	],
//	//mechs
	[
	0x031aae,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x031aaf,
//	0x03ba93
	],
	//X position max x17
	[
	0x031aaa,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x031aab,
//	0x03ba8f
	],
	//color and team
	[
	0x031ab1,
//	0x03ba95
	]
];

let scenarioThirtyFiveEnemy = [ // 10 initial, 
//Pilots 
	[
	0x031b4e,
//	0x03ba90
	],
	//levels
	[
	0x031b4f,
//	0x03ba91
	],
//	//mechs
	[
	0x031b50,
//	0x03ba92
	],
	//turnstoactivation
	[
	0x031b51,
//	0x03ba93
	],
	//X position max x17
	[
	0x031b4c,
//	0x03ba8e
	],
	//Y position max x17
	[
	0x031b4d,
//	0x03ba8f
	],
	//color and team
	[
	0x031b53,
//	0x03ba95
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


/*let scenarioNineAlly = [  // 5 long  //combattler scenario  //I don't think they spawn as normal.  Needs research
	//Pilot
	[
	0x0306a8 //Bright
	],
	//level
	[
	0x0306a9
	],
	//mech
	[
	0x0306aa
	],
	//color and allegience?
	[
	0x0306ab
	],
	//x position  ** remember, first slot is 2 bytes, everything after is 3 bytes!! max x17
//	[
// 0x030312
//	],
	//y position max x17
//	[
//	0x030313
//	],
	//pilot pointer  ** do not use until second loop
//	[
//	0x030316
//	]
];*/

let scenarioTenAlly = [  // 2 long // scenario 14
	//Pilot
	[
	0x0302f6 
	],
	//level
	[
	0x0302f7
	],
	//mech
	[
	0x0302f8
	],
	//color and allegience?
	[
	0x0302f9
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


/*  Unsure if these actually control the data I thought they did.
let newPilotScenTwo = [
	[
		0x0303bc
	],
	[
		0x0303bd
	]
]

let newPilotScenThree = [
	[
		0x030446
	],
	[
		0x030447
	]
]

let newPilotScenThree = [
	[
		0x030520
	],
	[
		0x030521
	]
]

*/



/*
this section is just in case I want to further refine based on the kind of map, such as water filled or mountain filled


let waterAllyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba
let airAllyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba
let airEnemyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba
let waterEnemyMechs = [
	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 
	0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 
	0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 
	0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f, 0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 
	0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f, 
	0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 
	0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,	0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xC5, 0xc6, 0xc7, 0xc8, 0xc9 
];//2f has no map sprite and will cause major issues, bb-bd is created on death from ba