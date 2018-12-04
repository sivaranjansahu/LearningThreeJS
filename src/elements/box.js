var THREE = require("three");

let getBox = size => {
  let geometry = new THREE.BoxGeometry(size, size, size);
  var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });
  let mesh = new THREE.Mesh(geometry, material);
  return mesh;
};

export default getBox;
