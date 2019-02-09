import React, { Component } from 'react';
// import cubeMatMap from '../textures/square-outline-textured.png';
// import * as THREE from 'three';
// import OrbitControls from 'three-orbitcontrols';
import {Road} from '../canvas';
import ControlPanel from './ControlPanel';


// // const MAX_POINTS = 500;
// // let drawCount = 0;
// // const lines = [];
// let scene, renderer, camera;
// // let updateLinePositions;
// // let gRenderScene;

// let rollOverGeo;
// let rollOverMaterial;
// let rollOverMesh;

// let cubeGeo
// let cubeMaterial



// let raycaster;
// let mouse;
// let plane;

// let objects = [];

// function onDocumentKeyUp(){}
// function onDocumentKeyDown(){}
// function onDocumentMouseDown(e){
//   e.preventDefault();
//   mouse.set((e.clientX/window.innerWidth)*2 -1, - (e.clientY / window.innerHeight * 1.15 )*2 + 1);
//   raycaster.setFromCamera(mouse, camera);
//   let intersects  = raycaster.intersectObjects(objects);
//   if (intersects.length > 0) {
//     let intersect = intersects[0];
//     //delete cube
//     // create cube
//     let voxel = new THREE.Mesh(cubeGeo, cubeMaterial);
//     voxel.position.copy(intersect.point).add(intersect.face.normal);
//     voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
//     scene.add(voxel);
//     objects.push(voxel);
//   }
//   renderer.render(scene,camera)
// }

// function onDocumentMouseMove(e){
//   e.preventDefault();
//   mouse.set( ( e.clientX / window.innerWidth ) * 2 - 1, - ( e.clientY / window.innerHeight * 1.15 ) * 2 + 1 );
//   raycaster.setFromCamera( mouse, camera );
//   let intersects = raycaster.intersectObjects( objects );
//   if ( intersects.length > 0 ) {
//     let intersect = intersects[ 0 ];
//     rollOverMesh.position.copy( intersect.point ).add( intersect.face.normal );
//     rollOverMesh.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
//   }
//   renderer.render(scene,camera)
// }

// function onWindowResize(){
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// let controls;

let ROAD;

class Scene extends Component {
  componentDidMount(){
    this.window = window;
    this.document = document;
  }
  createScene(window, document){
    ROAD = new Road(window, document, this.mount);
    ROAD.createScene();
  }



  updatePositions(){

    // let positions = lines[0].geometry.attributes.position.array;
    // let x = 0, y = 0, z =0, index = 0;
    // console.log(positions);
    // for(let i = 0, l = MAX_POINTS; i<l; i++){
    //   positions[index++ ] = x;
    //   positions[index++ ] = y;
    //   positions[index++ ] = z;
    //   console.log(x,y,z);
    //   x += (Math.random() - 0.5) * 30;
    //   y += (Math.random() - 0.5) * 30;
    //   z += (Math.random() - 0.5) * 30;
    // }
  }
  // static renderer(){
  //   return renderer;
  // }
  // static renderScene(){
  //   gRenderScene();
  // }
  // renderScene(){
  //   renderer.render(scene, camera);
  // }

  render(){
    return (
      <div>
        <div style={{position: 'absolute'}}>
          <h1 style={{background: '#000000', color:'#ffffff'}}>Hello RBI</h1>
        </div>
        <div style={{background:'#000000'}} id="Scene" ref={(mount)=>{
          this.mount=mount;
          console.log(window, document, this.mount)
          // gRenderScene = this.renderScene;
          // updateLinePositions = this.updatePositions;
          ROAD = this.createScene(window, document);
          // ROAD.animateScene();
        }}></div>
        <ControlPanel />
      </div>
    )
  }
}




export default Scene;
