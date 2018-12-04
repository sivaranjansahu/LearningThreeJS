var THREE = require("three");
import getbox from "../elements/box";
import getplane from "../elements/plane";
import getperspectivecamera from "../cameras/persepctivecamera";
let init = () => {
  let scene = new THREE.Scene();

  //add box
  let box = getbox(2);
  box.position.y = box.geometry.parameters.height/2;
  scene.add(box);

  //add camera
  let camera = getperspectivecamera(2, 2, 10);

  //add plane
  let plane = getplane(5, 5);

  scene.add(plane);

  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.getElementById("webgl").appendChild(renderer.domElement);
  renderer.render(scene, camera);
};

export default init;
//init();
