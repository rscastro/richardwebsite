import './_index.scss';

import React, { Component } from 'react';
import LogoTypeSvg from '../ui-LogoTypeSvg';
import Logos from '../ui-Logos';

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
      minHeight: -140,
      steps: 500,
      turbulent: true,
      useBufferGeometry: true,
      xSegments: this.xS,
      xSize: 1000,
      ySegments: this.yS,
      ySize: 1000
    });
    this.iteration = 0;
    this.totalIteration = 100;
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
    if (this.iteration < this.totalIteration) {
      this.camera.position.y = this.easeOutCubic(this.iteration,1300,-640, this.totalIteration);
      this.iteration++;
    }

    // rotate terrain
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

    window.addEventListener('resize', this.onWindowResize.bind(this), false);
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
        <Logos />
      </div>
    );
  }
}
