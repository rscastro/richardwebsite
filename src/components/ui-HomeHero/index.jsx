import './_index.scss';

import React, { Component } from 'react';
import TimelineMax from 'TimelineMax';
import TweenMax from 'TweenMax';
import GsapEasing from 'GsapEasing'
import MorphSvg from '../../../lib/gsap/plugins/MorphSVGPlugin.min.js';
import DrawSVG from '../../../lib/gsap/plugins/DrawSVGPlugin.min.js';
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
    this.fog = 0.0022;
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
      maxHeight: 415,
      minHeight: -120,
      steps: 500,
      turbulent: true,
      useBufferGeometry: true,
      xSegments: this.xS,
      xSize: 500,
      ySegments: this.yS,
      ySize: 500
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


  // Animate MARTIAN type
  animateLogoType() {
    const tlM = new TimelineMax();
    const tlA = new TimelineMax();
    const tlR = new TimelineMax();
    const tlT = new TimelineMax();
    const tlI = new TimelineMax({yoyo:false});
    const tlAA = new TimelineMax({yoyo:false});
    const tlN = new TimelineMax({yoyo:false});

    TweenMax.set('.logo-type', {opacity: 1});
    tlM.to('#m1b', 0.4, {morphSVG:{shape:'#m1', shapeIndex:4}, ease: GsapEasing.Power2.easeIn}).to('#m2b', 0.2, {morphSVG:{shape:'#m2', shapeIndex:4}}).to('#m3b', 0.2, {morphSVG:{shape:'#m3', shapeIndex:4}}).to('#m4b', 0.4, {morphSVG:{shape:'#m4', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlA.to('#a1b', 0.6, {morphSVG:{shape:'#a1', shapeIndex:4}, ease: GsapEasing.Power2.easeIn}).to('#a2b', 0.6, {morphSVG:{shape:'#a2', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlR.fromTo('#rPath', 0.8, {drawSVG:'0% 0%'},{drawSVG:'0% 100%', ease: GsapEasing.Power2.easeInOut}).to('#r1b', 0.4, {morphSVG:{shape:'#r1', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlT.to('#t1b', 0.6, {morphSVG:{shape:'#t1', shapeIndex:3}, ease: GsapEasing.Power2.easeIn}).to('#t2b', 0.6, {morphSVG:{shape:'#t2', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlI.to('#i1b', 1.2, {morphSVG:{shape:'#i1', shapeIndex:4}, ease: GsapEasing.Power2.easeInOut});
    tlAA.to('#aa1b', 0.4, {morphSVG:{shape:'#aa1', shapeIndex:4}, ease: GsapEasing.Power2.easeIn}).to('#aa2b', 0.4, {morphSVG:{shape:'#aa2', shapeIndex:4}}).to('#aa3b', 0.4, {morphSVG:{shape:'#aa3', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlN.to('#n1b', 0.4, {morphSVG:{shape:'#n1', shapeIndex:4}, ease: GsapEasing.Power2.easeIn}).to('#n2b', 0.4, {morphSVG:{shape:'#n2', shapeIndex:4}}).to('#n3b', 0.4, {morphSVG:{shape:'#n3', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
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
    this.animateLogoType();

    this.container = document.getElementById('hero-container');
    this.renderer.setSize( this.container.offsetWidth, window.innerHeight );
    this.container.appendChild( this.renderer.domElement );
    this.camera = new this.THREE.PerspectiveCamera( 90, this.container.offsetWidth/window.innerHeight, 1, 1200 );
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

      </div>
    );
  }
}
