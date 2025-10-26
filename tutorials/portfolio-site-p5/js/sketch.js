
let canvas;
let xPos= 0;
let yPos= 0;
let easing = .5;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    // background(125);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    
}

function mouseMoved() {
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);
}

function drawThing(_x, _y) {
    strokeWeight(0);
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(_x, _y, 30, 30);
}