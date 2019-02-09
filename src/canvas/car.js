import * as THREE from 'three';

// const negRange = [...Array.new(500).keys()].map((num)=>num*-1);
// const gridRange = [...Array.new(500)].slice(1,499).concat(negRange);

const carProps = {};

export function makeCars() {
  for(let i=0; i<10; i++){
    let cubeGeometry = new THREE.CubeGeometry(50 + (Math.random() * 100),45,50,1,1,1);
    let wireMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe:true } );
    let car = new THREE.Mesh( cubeGeometry, wireMaterial );
    carProps[i] = Math.random() * 20;
  car.position.set(-500 + (Math.random() * 1053), 0, 50 * (Math.random() * 10) * (0-1 ** (Math.random() * 10) )) ;
  this.collidableMeshList.push(car);
  this.scene.add(car);
  }
}

export function makeWhoppers() {
  for(let i=0; i<5; i++){
    let cubeGeometry = new THREE.CubeGeometry(50,15,50,1,1,1);
    let wireMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true } );
    let whopper = new THREE.Mesh( cubeGeometry, wireMaterial );
    whopper.position.set(-500 + (Math.random() * 1053), 0, 50 * (Math.random() * 10) * (0-1 ** (Math.random() * i * 10) )) ;
    // this.collidableMeshList.push(whopper);
    this.scene.add(whopper);
  }
}


export function animateCars(car, delta, i){
  let moveDistance = (400 + carProps[i]) * delta; // 200 pixels per second
  let modPos = car.position.x + moveDistance;
  // if (modPos === 0) {modPos = -500};
  if (modPos >= 500) { modPos = -500};
  // let carPosition = (modPos === 0) ? -500 : modPos;
  car.position.x = modPos;
  return car
}

// export function