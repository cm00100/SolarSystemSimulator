

var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var controls = new THREE.OrbitControls(camera, renderer.domElement);


renderer.setSize(window.innerWidth, window.innerHeight);


var radius = 40;
var segments = 50;
var rings = 30;

var earth_tex = new THREE.TextureLoader().load("earth1.jpg");

var geometry = new THREE.SphereGeometry(radius, segments, rings);
var material = new THREE.MeshBasicMaterial({
  //color: 0xF3A2B0,
  map: earth_tex
  //wireframe: true;
});

var earthSphere = new THREE.Mesh(geometry, material);
scene.add(earthSphere);

camera.position.z = 150;
controls.update;

var render = function() {
  requestAnimationFrame(render);
  controls.update();

  renderer.render(scene, camera);
};

render();
    