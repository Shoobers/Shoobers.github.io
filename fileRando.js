window.crc32=function(r){for(var a,o=[],c=0;c<256;c++){a=c;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}for(var n=-1,t=0;t<r.length;t++)n=n>>>8^o[255&(n^r.charCodeAt(t))];return(-1^n)>>>0};

	let app = new Vue({
	el: '#app',
	data: {
		correctFileCRCcheck: null,
		randomized: false,
		randomized_rom: null,
		spoilerLog: "",
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
						alert("The provided rom is Super Robot Wars 3 translated by Aeon Genesis 2.0 with Music adjusted");
					} else if (crcCheck === 2235440940) {
						app.correctFileCRCcheck = true;
						app.romType = 'SRW32.0';
						alert("The provided rom is Super Robot Wars 3 translated by Aeon Genesis 2.0");
					} else if (crcCheck === 2282947228) {
						app.correctFileCRCcheck = true;
						app.romType = 'SRW3JP';
						alert("The provided rom is Super Robot Wars 3 Japanese");
					} else if (crcCheck === 2157445912) {
						app.correctFileCRCcheck = true;
						app.romType = 'SRW31.0';
						alert("The provided rom is the outdated 1.0 translation by Aeon Genesis");
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
					return_val = randomize(view, myrng, {romType: app.romType}, {romType: app.spoilerLog});
				}
				catch(e) {
					alert("error randomizing: "+e);
					console.error(e);
					throw e;
				}
				app.randomized_rom = return_val[0];    
				app.spoilLog = return_val[1];
				app.randomized = true;
				reader.abort();
				}
			reader.readAsArrayBuffer(selectedFile);
			},
		},			
		computed: {
			randomSRW: function() {
				if (!this.randomized) return '';
	
				let blob = new Blob([this.randomized_rom], {
					type: 'application/octet-stream'
				});
			
				return window.URL.createObjectURL(blob);
			},
			
			textSpoilLog: function() {
				if (!this.randomized) return '';
	
				let blob = new Blob([this.spoilLog], {
					type: 'text/plain'
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
			},
			
			outputSpoilerLog: function() {
				let dt = new Date();
				if( this.romType === 'SRW32.0M') {
					return `spoilSRW32.0eM-${dt.toJSON()}.txt`;
				} else if (this.romType === 'SRW32.0') {
					return `spoilSRW32.0e-${dt.toJSON()}.txt`;
				} else if (this.romType = 'SRW31.0') {
					return `spoilSRW31.0e-${dt.toJSON()}.txt`;
				} else {
					return `spoilSRW3JP-${dt.toJSON()}.txt`;
				}
			}
		}
	})