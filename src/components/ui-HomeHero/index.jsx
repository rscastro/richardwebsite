import './_index.scss';

import React, { Component } from 'react';
import LogoTypeSvg from '../ui-LogoTypeSvg';

import THREELib from 'three-js';
import './OrbitControls.js';
import './THREE.Terrain.js';

export default class HomeHero extends Component {

  constructor(props) {
    super(props);

    this.container = null;
    this.THREE = THREELib();
    this.scene = new this.THREE.Scene();
    this.scene.background = new this.THREE.Color( 0x202020 );
    this.camera = new this.THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 1, 1200 );
    this.renderer = new this.THREE.WebGLRenderer({ antialias: true });
    this.controls = null;
    this.decrement = .000025;
    this.cameraPos = 1300;
    this.fog = 0.0021;
    this.xS = 180;
    this.yS = 180;
    this.mesh = new this.THREE.MeshBasicMaterial({
      wireframe: true,
      color: 0xd94c02
    });
    this.terrainScene = this.THREE.Terrain({
      easing: this.THREE.Terrain.EaseInOut,
      frequency: 50,
      heightmap: this.THREE.Terrain.DiamondSquare,
      material: this.mesh,
      maxHeight: 455,
      minHeight: -240,
      steps: 900,
      turbulent: true,
      useBufferGeometry: true,
      xSegments: this.xS,
      xSize: 1100,
      ySegments: this.yS,
      ySize: 1100
    });
    this.iteration = 0;
    this.totalIteration = 100;
    this.isZoomed = false;
    this.doneMoving = true;
    this.fromRotationX = 0;
    this.fromRotationY = 0;
  }

  static get propTypes() {
    return {
      src: React.PropTypes.string,
      title: React.PropTypes.string
    };
  }

  update() {
    let time = Date.now() * 0.001;

    // animate terrain into view
    if (this.iteration < this.totalIteration && !this.isZoomed) {
      this.camera.position.y = this.easeOutCubic(this.iteration,1300,-750, this.totalIteration);
      this.iteration++;
    } else if (this.iteration >= this.totalIteration) {
      this.isZoomed = true;
      this.iteration = 0;
      this.totalIteration = 100;
    }

    // rotate terrain z-axis
    if (this.terrainScene) {
      this.terrainScene.rotation.z = time * 0.08;
    }

    requestAnimationFrame( this.update.bind(this) );

    this.renderer.render(this.scene, this.camera);
  }

  componentDidMount() {
    this.container = document.getElementById('hero-container');
    this.renderer.setSize( this.container.offsetWidth, window.innerHeight );
    this.container.appendChild( this.renderer.domElement );
    this.camera = new this.THREE.PerspectiveCamera( 110, this.container.offsetWidth/window.innerHeight, 1, 2000 );
    this.camera.position.x = 0;
    this.camera.position.y = this.cameraPos;
    this.camera.position.z = 0;
    this.controls = new this.THREE.OrbitControls(this.camera, this.container);

    this.scene.add(this.terrainScene);

    this.scene.fog = new this.THREE.FogExp2( 0x202020, this.fog);

    this.update();

    // container click/tap listener
    this.container.addEventListener('click', () => {
      if (this.doneMoving) {
        this.fromRotationX = this.terrainScene.rotation.x;
        this.fromRotationY = this.terrainScene.rotation.y;
        this.doneMoving = false;
        this.iteration = 0;
        this.totalIteration = 100;
        this.rotateTerrain();
      }
    });

    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  }

  degInRad(deg) {
    return deg * Math.PI / 180;
  }

  /** 
  * Handle terrain x,y rotation
  **/
  rotateTerrain() {
    if (this.iteration <= this.totalIteration && !this.doneMoving) {
      this.terrainScene.rotation.x = this.easeOutCubic(this.iteration,this.fromRotationX,-0.45, this.totalIteration);
      this.terrainScene.rotation.y = this.easeOutCubic(this.iteration,this.fromRotationY,-0.35, this.totalIteration);
      requestAnimationFrame( this.rotateTerrain.bind(this) );
      this.iteration++;
    }

    if (this.iteration === this.totalIteration) {
      this.doneMoving = true;
    }
  }

  onWindowResize() {
    this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
  }

  easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c*(t*t*t + 1) + b;
  }

  render() {
    return (
      <div id="hero-container" className="home-hero">
        <main className="main">
          <div className="logo-container">
            <LogoTypeSvg />
          </div>
        </main>
      </div>
    );
  }
}
