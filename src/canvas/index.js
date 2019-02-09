// import cubeMatMap from '../textures/square-outline-textured.png';
// import * as THREE from 'three';
// import OrbitControls from 'three-orbitcontrols';
import {createScene as makeScene} from './scene';
import {
  onWindowResize, onDocumentKeyUp, onDocumentKeyDown,
  onDocumentMouseDown, onDocumentMouseMove, setKeyboard
} from './playerControls';
import {animateScene, updateScene} from './animate'
import {createPlayer} from './player';
import {makeCars, animateCars} from './car'

export class Road {
  constructor(window, document, mount){
    this.window = window;
    this.mount = mount;
    this.document = document;

    this.clock = undefined;
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
    this.keyboard = undefined;
    this.plane = undefined;

    this.MovingBox = undefined;
    this.objects = [];

    // collisions
    this.collidableMeshList = [];
    this.arrowList = [];
    this.directionList = [];

    this.createScene = this.createScene.bind(this);
    this.animateScene = this.animateScene.bind(this);
    this.updateScene = this.updateScene.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.makeCars = this.makeCars.bind(this);
    this.animateCars = this.animateCars.bind(this);
    this.setKeyboard = this.setKeyboard.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this);
    // this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
    // this.onDocumentKeyUp = this.onDocumentKeyUp.bind(this);
    // this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
    // this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this);

  }



}
Road.prototype.makeCars = makeCars;
Road.prototype.animateCars = animateCars;
Road.prototype.createPlayer = createPlayer;
Road.prototype.createScene = makeScene;
Road.prototype.onWindowResize = onWindowResize;
Road.prototype.setKeyboard = setKeyboard;
Road.prototype.animateScene = animateScene;
Road.prototype.updateScene = updateScene;

  // Road.prototype.onDocumentKeyUp = onDocumentKeyUp;
  // Road.prototype.onDocumentKeyDown = onDocumentKeyDown;
  // Road.prototype.onDocumentMouseMove = onDocumentMouseMove;
  // Road.prototype.onDocumentMouseDown = onDocumentMouseDown;


// let updateLinePositions;
// let gRenderScene;
