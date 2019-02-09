import * as THREE from 'three';

export function makeCars() {
  for(let i=0; i<10; i++){
    let cubeGeometry = new THREE.CubeGeometry(50,25,50,1,1,1);
    let wireMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe:true } );
    let car = new THREE.Mesh( cubeGeometry, wireMaterial );
  car.position.set(-500 + (Math.random() * 1053), 0, 50 * (Math.random() * 10) * (0-1 ** (Math.random() * 10) )) ;
  this.collidableMeshList.push(car);
  this.scene.add(car);
  }
}


export function animateCars(car, delta){
  let moveDistance = 400 * delta; // 200 pixels per second
  let modPos = car.position.x + moveDistance;
  // if (modPos === 0) {modPos = -500};
  if (modPos >= 500) { modPos = -500};
  // let carPosition = (modPos === 0) ? -500 : modPos;
  car.position.x = modPos;
  return car
}

// export function