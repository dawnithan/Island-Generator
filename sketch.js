let mapSize = 256;
let noiseVal = 0;
let scale = 0.04;
let greyscale = 0.0;
let img;
let scaleSlider;

function preload() {
	// Radial gradients - using URLs because browser security lol
	// TODO: replace with a generative function to give greater control over island generation
	img = loadImage('https://i.imgur.com/TVDseD1.jpg');
	img2 = loadImage('https://i.imgur.com/ZpnCxRz.png');
}

function setup() {
	// Draw the canvas, load the image
	createCanvas(mapSize, mapSize);
	
	// Small island
	// image(img, 0, 0, mapSize, mapSize);

	// Large island
	image(img2, 0, 0, mapSize, mapSize);
	
	// Generate the island
	setTimeout(generateIsland(), 2000);

	// Create the slider
	// scaleSlider = createSlider(1, 10, 5);
	// scaleSlider.position(10, mapSize+10);
}

function draw() {
	// let scaleValue = scaleSlider.value();
	// scaleValue = scaleValue / 100;
	// generateIsland(scaleValue);
}

function generateIsland() {
	for(let x = 0; x < width; x++) {
		for(let y = 0; y < height; y++) {
			// Compute perlin noise for this x,y coord
			noiseVal = noise(x*scale, y*scale);
			// Get the color value of the current pixel
			greyscale = get(x, y);
			// Subtract the noise value from the greyscale
			noiseVal -= greyscale[0]/255;
			// Snow
			if (noiseVal >= 0.6) {
				stroke(239, 249, 249)
				point(x, y);
			}
			// Mountain
			else if (noiseVal < 0.6 && noiseVal >= 0.4) {
				stroke(117, 105, 58)
				point(x, y);
			}
			// Land
			else if (noiseVal < 0.4  && noiseVal > 0.1) {
				stroke(93, 178, 80)
				point(x, y);
			}
			// Beach
			else if (noiseVal <= 0.1  && noiseVal > 0.01) {
				stroke(198, 192, 125)
				point(x, y);
			}
			// Ocean
			else {
				stroke(66, 134, 244)
				point(x, y);
			}
		}
	}
}