let epX = 0;
let epY = 0;
let epZ = 0;
let epR = 0;
let rhTex;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    
    background(201,32, 12);
    
    //rhTex = loadImage("");
}

function draw() {
    
    background(201,32, 12);
    epR += 0.03;
    epZ = map(mouseY, 0, height, 0, -100);
    renderPlanetEarth();
    
    
}

function renderPlanetEarth() {
    //texture(rhTex);
    translate(epX, epY, epZ);
    rotateY(radians(epR));
    sphere(200);
    //code
}

