var circles = [];

function setup() {
	createCanvas(256, 256);

	for (let i = 0; i < 10; i++) {

		let w = random(width);
		let h = random(height);

		if (w < 256 && h < 256) {
			var circle = {
	      		x: w,
	      		y: h,
	      		r: random(8, 64)
	    	}
	    	circles.push(circle);
		}

	}

	for (var i = 0; i < circles.length; i++) {
	    fill(0, 0, 0, 220);
	    noStroke();
	    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  	}
}