// import cubeMatMap from '../textures/square-outline-textured.png';
// import * as THREE from 'three';
// import OrbitControls from 'three-orbitcontrols';
import {createScene as makeScene} from './scene';
import {
  onWindowResize, onDocumentKeyUp, onDocumentKeyDown,
  onDocumentMouseDown, onDocumentMouseMove
} from './controls';
import {animateScene} from './animate'

// let scene, renderer, camera;
// let rollOverMaterial;
// let rollOverMesh, rollOverGeo;

// let cubeGeo
// let cubeMaterial

// let raycaster;
// let mouse;
// let plane;

// let objects;



// // let updateLinePositions;
// // let gRenderScene;
// export default {
//   scene,
//   renderer,
//   camera,
//   rollOverGeo,
//   rollOverMaterial,
//   rollOverMesh,
//   cubeGeo,
//   cubeMaterial,
//   raycaster,
//   mouse,
//   plane,
//   objects
// }

export class Road {
  constructor(window, document, mount){
    this.window = window;
    this.mount = mount;
    this.document = document;

    this.renderer = undefined;
    this.camera = undefined;

    this.rollOverGeo = undefined;
    this.rollOverMaterial = undefined;
    this.rollOverMesh = undefined;
    // this.cubeGeo = undefined;
    // this.cubeMaterial = undefined;

    this.raycaster = undefined;
    this.gridHelper = undefined;
    this.geometry = undefined;
    this.plane = undefined;

    this.mouse = undefined;
    this.plane = undefined;

    this.objects = [];

    this.createScene = this.createScene.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
    this.onDocumentKeyUp = this.onDocumentKeyUp.bind(this);
    this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
    this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this);
    // this.scene = this.createScene(window, document, mount);

  }

  // createScene) => makeScene;



}

  Road.prototype.createScene = makeScene;
  Road.prototype.onWindowResize = onWindowResize;
  Road.prototype.onDocumentKeyUp = onDocumentKeyUp;
  Road.prototype.onDocumentKeyDown = onDocumentKeyDown;
  Road.prototype.onDocumentMouseMove = onDocumentMouseMove;
  Road.prototype.onDocumentMouseDown = onDocumentMouseDown;

  Road.prototype.animateScene = animateScene;
// let updateLinePositions;
// let gRenderScene;
