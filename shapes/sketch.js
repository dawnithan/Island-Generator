let mapSize = 600;
let polygons = [];

function setup() {
	// Draw the canvas, load the image
	createCanvas(mapSize, mapSize);
	background(0, 0, random(10,100), 255);
	
	shapesGalore();
}

function draw() {
}

function shapesGalore() {
	for (let i = 0; i < 200; i++) {
		// clamp x,y positions within the middle of the map
		// let w = random(64, 192); let h = random(64, 192);
		let w = random(width); let h = random(height);

		var _polygon = {
			x: w,
			y: h,
			r: random(8, 48)
		}

		polygons.push(_polygon);
	}

	for (var i = 0; i < polygons.length; i++) {
		fill(0, random(100,200), random(100,200), 255);
		noStroke();
		// ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
		polygon(polygons[i].x, polygons[i].y, polygons[i].r, random(5, 10));
	}
}

function polygon(x, y, radius, npoints) {
	let angle = TWO_PI / npoints;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a) * radius;
		let sy = y + sin(a) * radius;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}