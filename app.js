
var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var controls = new THREE.OrbitControls(camera, renderer.domElement);


renderer.setSize(window.innerWidth, window.innerHeight);

// Reference for geometry: (radius, segments, rings)
//var radius = 5;  Scale
//var segments = 50;
//var rings = 30;
//-------------------Planet objects---------------------



// Sun
var sun_tex = new THREE.TextureLoader().load("img/sun.jpg");
var sunGeo = new THREE.SphereGeometry(90, 50, 30);
var sunMaterial = new THREE.MeshBasicMaterial({
 // color: 0xF3A2B0,
  map: sun_tex
 // wireframe: true
});
var sunSphere = new THREE.Mesh(sunGeo, sunMaterial);
sunSphere.translateX(-190);
scene.add(sunSphere);


// Mercury

var mercury_tex = new THREE.TextureLoader().load("img/mercury.jpg");
var mercGeo = new THREE.SphereGeometry(2, 50, 30);
var mercMaterial = new THREE.MeshBasicMaterial({ map: mercury_tex });
var mercSphere = new THREE.Mesh(mercGeo, mercMaterial);
mercSphere.translateX(-60);
scene.add(mercSphere);


// Venus

var venus_tex = new THREE.TextureLoader().load("img/venus.jpg");
var venusGeo = new THREE.SphereGeometry(4, 50, 30);
var venusMaterial = new THREE.MeshBasicMaterial({ map: venus_tex });
var venusSphere = new THREE.Mesh(venusGeo, venusMaterial);
venusSphere.translateX(-30);
scene.add(venusSphere);


// Earth
var earth_tex = new THREE.TextureLoader().load("img/earth1.jpg");
var earthGeo = new THREE.SphereGeometry(5, 50, 30);
var earthMaterial = new THREE.MeshBasicMaterial({
  //color: 0xF3A2B0,
  map: earth_tex
 // wireframe: true
});
var earthSphere = new THREE.Mesh(earthGeo, earthMaterial);
scene.add(earthSphere);


// Mars

var mars_tex = new THREE.TextureLoader().load("img/mars1.jpg");
var marsGeo = new THREE.SphereGeometry(4, 50, 30);
var marsMaterial = new THREE.MeshBasicMaterial({ map: mars_tex });
var marsSphere = new THREE.Mesh(marsGeo, marsMaterial);
marsSphere.translateX(30);
scene.add(marsSphere);

// Jupiter

var jupiter_tex = new THREE.TextureLoader().load("img/jupiter.jpg");
var jupiterGeo = new THREE.SphereGeometry(30, 50, 30);
var jupiterMaterial = new THREE.MeshBasicMaterial({ 
  map: jupiter_tex
  });
var jupiterSphere = new THREE.Mesh(jupiterGeo, jupiterMaterial);
jupiterSphere.translateX(100);
scene.add(jupiterSphere);


// Saturn

var saturn_tex = new THREE.TextureLoader().load("img/saturn.jpg");
var satGeo = new THREE.SphereGeometry(22, 50, 30);
var satMaterial = new THREE.MeshBasicMaterial({ map: saturn_tex });
var satSphere = new THREE.Mesh(satGeo, satMaterial);
satSphere.translateX(200);
scene.add(satSphere);

//Saturn Ring
var saturnRing_tex = new THREE.TextureLoader().load("img/saturnRing.png");
var satRingGeo = new THREE.PlaneGeometry(150, 50, 30);
var satRingMaterial = new THREE.MeshBasicMaterial({ 
  	map: saturnRing_tex
  });
var satRing = new THREE.Mesh(satRingGeo, satRingMaterial);
satRing.translateX(200);
scene.add(saturnRing_tex);


// Uranus

var uranus_tex = new THREE.TextureLoader().load("img/uranus.jpg");
var urGeo = new THREE.SphereGeometry(13, 50, 30);
var urMaterial = new THREE.MeshBasicMaterial({ map: uranus_tex});
var urSphere = new THREE.Mesh(urGeo, urMaterial);
urSphere.translateX(290);
scene.add(urSphere);


// Neptune

var neptune_tex = new THREE.TextureLoader().load("img/neptune.jpg");
var nepGeo = new THREE.SphereGeometry(12, 50, 30);
var nepMaterial = new THREE.MeshBasicMaterial({ map: neptune_tex });
var nepSphere = new THREE.Mesh(nepGeo, nepMaterial);
nepSphere.translateX(380);
scene.add(nepSphere);




//--------------Skysphere-------------------

var sky_tex = new THREE.TextureLoader().load("img/stars.jpg");
var skyGeometry = new THREE.SphereGeometry(500, 50, 30);
var skyMaterial = new THREE.MeshBasicMaterial({
	map: sky_tex,
	side: THREE.DoubleSide
});
var skySphere = new THREE.Mesh(skyGeometry, skyMaterial);
scene.add(skySphere);


//---------------Camera stuff------------------

camera.position.z = 390;
controls.update;

//-------------Rendering----------------------

var render = function() {
  requestAnimationFrame(render);
  controls.update();

  renderer.render(scene, camera);
};

render();
    