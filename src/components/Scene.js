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


let ROAD;

class Scene extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    this.window = window;
    this.document = document;

  }
  createScene(window, document){
    ROAD = new Road(window, document, this.mount);
    ROAD.createScene();
    ROAD.animateScene();
  }




  render(){
    return (
      <div>
        <div style={{position: 'absolute'}}>
          <h1 style={{background: 'transperant', color:'white'}}>Whopper Frogger</h1>
        </div>
        <div style={{background:'#000000'}} id="Scene" ref={(mount)=>{
          this.mount=mount;
          console.log(window, document, this.mount)
          // gRenderScene = this.renderScene;
          // updateLinePositions = this.updatePositions;
          ROAD = this.createScene(window, document);
        }}></div>
      </div>
    )
  }
}




export {ROAD, Scene};
