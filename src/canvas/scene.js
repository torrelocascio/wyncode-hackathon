import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
// import ControlPanel from './ControlPanel';
import cubeMatMap from '../textures/square-outline-textured.png';
// import {onDocumentKeyDown, onDocumentKeyUp, onDocumentMouseDown, onDocumentMouseMove, onWindowResize } from './controls'
// import Road from '.';

// let camera, scene, renderer, rollOverGeo, rollOverMaterial, rollOverMesh;
// let controls, mouse;
// let cubeGeo, cubeMaterial;
// let raycaster
// let plane;
// let objects;

export function createScene () {
  // this.window = window;
  // this.document = document;
  // this.mount = mount;
  this.camera = new THREE.PerspectiveCamera( 45, this.window.innerWidth / this.window.innerHeight, 1, 10000);
  this.controls =  new OrbitControls(this.camera);
  this.camera.position.set(500, 800, 1300);
  this.camera.lookAt(0,0,0);
  this.controls.update();
  this.scene = new THREE.Scene();
  this.scene.background = new THREE.Color(0x000000);

  // roll over helpers
  this.rollOverGeo = new THREE.BoxBufferGeometry(50,50,50);
  this.rollOverMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, opacity: 0.5, transparent: true})
  this.rollOverMesh = new THREE.Mesh(this.rollOverGeo, this.rollOverMaterial);
  this.scene.add(this.rollOverMesh);

  let loader = new THREE.TextureLoader();
  // cubes
  loader.load(cubeMatMap, function(myTexture){
    this.cubeGeo = new THREE.BoxBufferGeometry(50, 50, 50);
    this.cubeMaterial = new THREE.MeshLambertMaterial({color: 0xf3b74c, map: myTexture});
  }.call(this));

  //grid
  this.gridHelper = new THREE.GridHelper(1000, 20);
  this.scene.add(this.gridHelper);

  //
  this.raycaster = new THREE.Raycaster();
  this.mouse = new THREE.Vector2();


  this.geometry = new THREE.PlaneBufferGeometry(1000,1000);
  this.geometry.rotateX(- Math.PI / 2);

  this.plane = new THREE.Mesh(this.geometry, new THREE.MeshBasicMaterial({visible: false}));
  this.scene.add(this.plane)

  this.objects.push(this.plane)

  // lights
  let ambientLight = new THREE.AmbientLight( 0x606060 );
  this.scene.add( ambientLight );
  let directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.set( 1, 0.75, 0.5 ).normalize();

  this.renderer = new THREE.WebGLRenderer({antialias: true});
  this.renderer.setPixelRatio(window.devicePixelRatio);
  this.renderer.setSize(window.innerWidth, window.innerHeight * 0.9);

  this.mount.appendChild(this.renderer.domElement);

  this.document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
  this.document.addEventListener( 'mousedown', this.onDocumentMouseDown, false );
  // document.addEventListener( 'keydown', onDocumentKeyDown, false );
  // document.addEventListener( 'keyup', onDocumentKeyUp, false );
  this.window.addEventListener( 'resize', this.onWindowResize, false );

  // const material = new THREE.LineBasicMaterial({color: 0xffffff, linewidth: 2});
  // const geometry = new THREE.BufferGeometry();
  // const positions = new Float32Array(MAX_POINTS * 3);
  // geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3) );
  // drawCount = 2;
  // geometry.setDrawRange(0, drawCount);

  // const line = new THREE.Line(geometry, material);
  // lines.push(line);
  // scene.add(line);

  // updateLinePositions();

  this.renderer.render(this.scene, this.camera);
}