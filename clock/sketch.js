let barWidth = 40;
let barRadius = 4;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(255);
    translate(400, 400);
    rotate(180);

    let hr = hour();
    let min = minute();
    let sec = second();

    let secDist = map(sec, 0, 60, 1, 300);
    let minDist = map(min, 0, 60, 1, 300);
    let hourDist = map(hr, 0, 24, 1, 300);

    noStroke();
    
    // Second
    fill('#e61c5d');
    rect(120, 40, barWidth, secDist, barRadius);

    // Minute
    fill('#930077');
    rect(200, 40, barWidth, minDist, barRadius);

    // Hour 
    fill('#3a0088');
    rect(280, 40, barWidth, hourDist, barRadius);

    textDetail(hr, min, sec);
}

function textDetail(hr, min, sec) {
    push();
        rotate(180)
        translate(-400, -40);
        
        fill(255);
        stroke(0);
        strokeWeight(2);
        
        // text(hr + ':' + min + ':' + sec, 10, 20);

        textFont("Roboto Mono");
        textSize(22);
        textAlign(CENTER)
        text(sec, 260, -10);
        text(min, 180, -10);
        text(hr,  100,  -10);
    pop();
}