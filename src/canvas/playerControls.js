import * as THREE from 'three';
// import {mouse, raycaster, scene, camera, rollOverMesh, renderer, objects} = from
// import {cubeGeo, cubeMaterial}
import {THREEx} from './threex'



export function setKeyboard(){
  this.keyboard = new THREEx.KeyboardState(this.document);
}

export function onDocumentKeyUp(){}

export function onDocumentKeyDown(){}

export function onDocumentMouseDown(e){
  e.preventDefault();
  this.mouse.set((e.clientX/this.window.innerWidth)*2 -1, - (e.clientY / this.window.innerHeight * 1.15 )*2 + 1);
  this.raycaster.setFromCamera(this.mouse, this.camera);
  let intersects  = this.raycaster.intersectObjects(this.objects);
  if (intersects.length > 0) {
    let intersect = intersects[0];
    //delete cube
    // create cube
    let voxel = new THREE.Mesh(this.cubeGeo, this.cubeMaterial);
    voxel.position.copy(intersect.point).add(intersect.face.normal);
    voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
    this.scene.add(voxel);
    this.objects.push(voxel);
  }
  this.renderer.render(this.scene,this.camera)
}

export function onDocumentMouseMove(e){
  e.preventDefault();
  this.mouse.set( ( e.clientX / window.innerWidth ) * 2 - 1, - ( e.clientY / window.innerHeight * 1.15 ) * 2 + 1 );
  this.raycaster.setFromCamera( this.mouse, this.camera );
  let intersects = this.raycaster.intersectObjects( this.objects );
  if ( intersects.length > 0 ) {
    let intersect = intersects[ 0 ];
    this.rollOverMesh.position.copy( intersect.point ).add( intersect.face.normal );
    this.rollOverMesh.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
  }
  this.renderer.render(this.scene,this.camera)
}

export function onWindowResize(){
  this.camera.aspect = window.innerWidth / window.innerHeight;
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(window.innerWidth, window.innerHeight);
}