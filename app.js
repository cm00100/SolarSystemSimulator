let epX = 0;
let epY = 0;
let epZ = 0;
let epR = 0;
let earthTex;
let marsTex;
let sunTex;



function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0,0, 0);
    earthTex = loadImage('earth.jpg');
    marsTex = loadImage('mars.jpg');
    sunTex = loadImage('sun.png');
}

function draw() {
    
    background(0,0, 0);
    epX = map(mouseX, -100, height, 0, -100);
    epY = map(mouseY, -100, height, 0, -100);
    
    
    
    noStroke();                 // Wireframe on the objects
    renderPlanetEarth();
    renderMarsPlanet();
    renderSun();
    orbitControl();
   
}

function renderPlanetEarth() {

     //epR += 0.03;
    texture(earthTex);
    translate(epX, epY, epZ);
    rotateY(radians(epR));
    sphere(200);    
}

function renderMarsPlanet() {
    //     epR += 0;

    texture(marsTex);
    translate(400, 0, 0);
    rotateY(radians(epR));
    sphere(100);
}

function renderSun() {
  //  epR += 0;

    texture(sunTex);
    translate(-1000, 0, 0);
    sphere(300);
}


    