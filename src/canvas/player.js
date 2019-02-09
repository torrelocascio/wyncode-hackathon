import * as THREE from 'three';

export function createPlayer(){
  let cubeGeometry = new THREE.CubeGeometry(20,60,20,8,8,8);
  let wireMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe:true } );
  this.player = new THREE.Mesh( cubeGeometry, wireMaterial );
  this.player.position.set(0, -60, 0);
  this.scene.add(this.player);
}