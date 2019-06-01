let dx = 0;
let dy = 0;
let dz = 0;
let r = 0;
let PI = 3.14
let earthTex;
let marsTex;
let sunTex;
let saturnRing;
let mario;


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

  //  background(225,0, 0);
    earthTex = loadImage('earth.jpg');
    marsTex = loadImage('mars.jpg');
    sunTex = loadImage('sun.png');
    saturnRing = loadImage('saturnRing.png');
    mario = loadImage('mario.jpg');
}

function draw() {
    
    background(0,0, 0);
    dx = map(mouseX, -100, height, 0, -100);
    dy = map(mouseY, -100, height, 0, -100);
    ambientLight(180);
    directionalLight(255, 248, 216, 0.25, 0.25, 0);   
    noStroke();                 // Wireframe on the objects
    renderPlanetEarth();
    renderMarsPlanet();
    renderJupiter();
    renderVenus();
    renderMercury();
    renderSun();
    renderSaturn();
    renderSaturnRing();
    orbitControl();
    normalMaterial();
   
}

function renderMercury() {
   
    texture();
    translate(-500, 0, 0);
    sphere(35);
}

function renderVenus() {
  

    texture();
    translate(-1700, 0, 0);
    sphere(68);
}

function renderPlanetEarth() {

     //epR += 0.03;
    texture(earthTex);
    translate(dx, dy, dz);
    rotateY(radians(r));
    sphere(80);    

}

function renderMarsPlanet() {

    texture(marsTex);
    translate(400, 0, 0);
    rotateY(radians(r));
    sphere(58);
}
function renderJupiter() {
 
    texture();
    translate(700, 0, 0);
    rotateY(radians(r));
    sphere(400);
}



function renderSun() {

    texture(sunTex);
    translate(-3500, 0, 0);
    sphere(2800);
}

function renderSaturnRing(){
    //saturn ring
    translate(-500, -270, 550);
    rotateY(PI / 2.0);
    rotateX(PI / 3.0);
    image(saturnRing,100, 100);
 
    
}


function renderSaturn(){
    texture();
    translate(6800, 0, 0);
    sphere(150);
}






    