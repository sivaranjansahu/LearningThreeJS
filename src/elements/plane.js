var THREE = require("three");

let getPlane = (w, h) => {
  let planeGeometry = new THREE.PlaneGeometry(w, h);
  let planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
  });
  let plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = Math.PI / 2;
  return plane;
};

export default getPlane;
