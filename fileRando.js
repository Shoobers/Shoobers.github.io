window.crc32=function(r){for(var a,o=[],c=0;c<256;c++){a=c;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}for(var n=-1,t=0;t<r.length;t++)n=n>>>8^o[255&(n^r.charCodeAt(t))];return(-1^n)>>>0};

	let app = new Vue({
	el: '#app',
	data: {
		correctFileCRCcheck: null,
		randomized: false,
		randomized_rom: null,
		showing_spoilers: false,
		romType: 'EU',
		seed: "",
		staticVariables: {
		}
	},
	
	methods: {
		fileChange: function() {
			app.correctFileCRCcheck = null;

			const selectedFile = document.getElementById('BaseSRW').files[0];
			let reader = new FileReader();
			// crc check
			reader.onload = function() {
				let crcCheck = crc32(reader.result);
				if (crcCheck === 2755626416) {
					app.correctFileCRCcheck = true;
						app.romType = 'SRW32.0M';
						alert("Super Robot Wars 3 translation by Aeon Genesis 2.0 with Music adjusted");
					} else if (crcCheck === 2235440940) {
						app.correctFileCRCcheck = true;
						app.romType = 'SRW32.0';
						alert("Super Robot Wars 3 translation by Aeon Genesis 2.0");
					} else if (crcCheck === 2282947228) {
						app.correctFileCRCcheck = true;
						app.romType = 'SRW3JP';
						alert("Super Robot Wars 3 Japanese");
					} else if (crcCheck === 2157445912) {
						app.correctFileCRCcheck = true;
						app.romType = 'SRW31.0';
						alert("This is the outdated 1.0 translation by Aeon Genesis");
					} else {
						app.correctFileCRCcheck = false;
						alert("You have selected an unrecognized Super Robot Wars 3 rom or a file that is not applicable to this Randomizer");
					}
				reader.abort();
			};
			reader.readAsBinaryString(selectedFile);
		},
		randomizeRom: function() {
			// use seed if provided, or gen one
			let myrng;
			if (app.seed === '') {
				app.seed = +(new Date()); 
			}
			myrng = new Math.seedrandom(app.seed);
			
			const selectedFile = document.getElementById('BaseSRW').files[0];
			let reader = new FileReader();
			app.randomized = false;
			app.showing_spoilers = false;
				// file processing
			reader.onload = function() {
				let view = new Uint8Array(reader.result);
				let return_val;
				try {
					return_val = randomize(view, myrng, {romType: app.romType});
				}
				catch(e) {
					alert("error randomizing: "+e);
					console.error(e);
					throw e;
				}
				app.spheres = return_val[0];
				app.unobtainable = return_val[1];   */
				app.randomized_rom = return_val[0];    
				app.randomized = true;
				reader.abort();
				}
			reader.readAsArrayBuffer(selectedFile);
			},
/*			getRowClass: function(loc_item) {
				if (loc_item[1].includes('Key'))
					return 'tr-green';
				if (loc_item[1] === 'freeon' || loc_item[1] === 'suction' || loc_item[1] === 'gil')
					return 'tr-yellow';
				return '';
			},*/
/*			orderedLocItems: function(loc_items) {
				return loc_items.sort((a, b) => (a[0] > b[1]) ? 1: -1)
			}*/
		},			
		computed: {
			createBlobURL: function() {
			if (!this.randomized) return '';

			let blob = new Blob([this.randomized_rom], {
				type: 'application/octet-stream'
			});
			
			return window.URL.createObjectURL(blob);
			},
			fname: function() {
				let dt = new Date();
				if( this.romType === 'SRW32.0M') {
					return `SRW32.0eM-${dt.toJSON()}.sfc`;
				} else if (this.romType === 'SRW32.0') {
					return `SRW32.0e-${dt.toJSON()}.sfc`;
				} else if (this.romType = 'SRW31.0') {
					return `SRW31.0e-${dt.toJSON()}.sfc`;
				} else {
					return `SRW3JP-${dt.toJSON()}.sfc`;
				}
			}
		}
	})