var THREE = require("three");

let getcamera = (x = 0, y = 0, z = 0) => {
  let camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = z;
  camera.position.y = y;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  return camera;
};

export default getcamera;
