import React, { Component } from 'react';

import TimelineMax from 'TimelineMax';
import TweenMax from 'TweenMax';
import GsapEasing from 'GsapEasing'
import MorphSvg from '../../../lib/gsap/plugins/MorphSVGPlugin.min.js';
import DrawSVG from '../../../lib/gsap/plugins/DrawSVGPlugin.min.js';

export default class LogoTypeSvg extends Component {

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
    tlM
      .to('#m1b', 0.4, {morphSVG:{shape:'#m1', shapeIndex:4}, ease: GsapEasing.Power2.easeIn})
      .to('#m2b', 0.2, {morphSVG:{shape:'#m2', shapeIndex:4}})
      .to('#m3b', 0.2, {morphSVG:{shape:'#m3', shapeIndex:4}})
      .to('#m4b', 0.4, {morphSVG:{shape:'#m4', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlA
      .to('#a1b', 0.6, {morphSVG:{shape:'#a1', shapeIndex:4}, ease: GsapEasing.Power2.easeIn})
      .to('#a2b', 0.6, {morphSVG:{shape:'#a2', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlR
      .fromTo('#rPath', 0.8, {drawSVG:'0% 0%'},{drawSVG:'0% 100%', ease: GsapEasing.Power2.easeInOut})
      .to('#r1b', 0.4, {morphSVG:{shape:'#r1', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlT
      .to('#t1b', 0.6, {morphSVG:{shape:'#t1', shapeIndex:3}, ease: GsapEasing.Power2.easeIn})
      .to('#t2b', 0.6, {morphSVG:{shape:'#t2', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlI
      .to('#i1b', 1.2, {morphSVG:{shape:'#i1', shapeIndex:4}, ease: GsapEasing.Power2.easeInOut});
    tlAA
      .to('#aa1b', 0.4, {morphSVG:{shape:'#aa1', shapeIndex:4}, ease: GsapEasing.Power2.easeIn})
      .to('#aa2b', 0.4, {morphSVG:{shape:'#aa2', shapeIndex:4}})
      .to('#aa3b', 0.4, {morphSVG:{shape:'#aa3', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
    tlN
      .to('#n1b', 0.4, {morphSVG:{shape:'#n1', shapeIndex:4}, ease: GsapEasing.Power2.easeIn})
      .to('#n2b', 0.4, {morphSVG:{shape:'#n2', shapeIndex:4}})
      .to('#n3b', 0.4, {morphSVG:{shape:'#n3', shapeIndex:4}, ease: GsapEasing.Power2.easeOut});
  }

  componentDidMount() {
    this.animateLogoType();
  }

  render() {
    return (
      <div className="logo-type" alt="Martian">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 310 40.3" enableBackground="new 0 0 310 40.3">
          <g id="M">
            <path id="m1" className="mask" d="M4.777,6.2v34.778H0V0.933"/>
            <path id="m2" className="mask" d="M21.954,31.73L4.777,13.129L0,0.933l25.146,27.232L21.954,31.73z"/>
            <path id="m3" className="mask" d="M43.756,7.933L21.954,31.73v-7.014L43.807,0.933L43.756,7.933z"/>
            <path id="m4" className="mask" d="M43.807,0.933v40.045h-4.777V13.129"/>
            <path id="m1b" className="reveal" d="M4.777,40.978L4.777,40.978H0l0,0"/>
            <path id="m2b" className="reveal" d="M2.721,10.843L2.721,10.843L0,0.933l0,0L2.721,10.843z"/>
            <path id="m3b" className="reveal" d="M21.954,31.73L21.954,31.73v-7.014l0,0V31.73z"/>
            <path id="m4b" className="reveal" d="M43.807,0.933L43.807,0.933l-4.777,11.184"/>
          </g>
          <g id="A">
            <path id="a1" className="mask" d="M78.625,6.212L60.353,40.51h-5.316L76.2,1.079"/>
            <path id="a1b" className="reveal" d="M60.353,40.51L60.353,40.51h-5.316l0,0"/>
            <path id="a2" className="mask" d="M76.2,0.965L97.463,40.51h-5.315L76.2,10.908"/>
            <path id="a2b" className="reveal" d="M76.2,1.079L76.2,1.079l-0.95,8.134l0,0"/>
          </g>
          <g id="R">
            <path id="rPath" fill="none" stroke="#EEEEEE" strokeWidth="4.6663" strokeMiterlimit="10" d="M111.582,40.473V3.582h16.926c10.297,0.55,12.065,15.87,0,17.427l-15.713-0.064"/>
            <path id="r1" className="mask" d="M126.972,22.657l9.63,17.828h5.308l-9.872-18.295"/>
            <path id="r1b" className="reveal" d="M126.972,22.657L126.972,22.657l5.066-0.467l0,0"/>
          </g>
          <g id="T">
            <path id="t1" className="mask" d="M154.125,5.36V0.6H183.7v4.76"/>
            <path id="t2" className="mask" d="M171.344,4.36v36.044h-4.761V4.36"/>
            <path id="t1b" className="reveal" d="M154.125,5.36V0.6l0,0V5.36"/>
            <path id="t2b" className="reveal" d="M171.344,4.36L171.344,4.36h-4.761l0,0"/>
          </g>
          <g id="I">
            <path id="i1" className="mask" d="M205.087,40.537H200.3V0.5h4.787V40.537z"/>
            <path id="i1b" className="reveal" d="M205.087,0.5H200.3l0,0H205.087L205.087,0.5z"/>
          </g>
          <g id="AA">
            <path id="aa1" className="mask" d="M243.5,5.9l-18.644,34.586H219.5l21.426-39.667"/>
            <path id="aa1b" className="reveal" d="M224.856,40.486L224.856,40.486H219.5l0,0"/>
            <path id="aa2" className="mask" d="M254.367,35.129L239.625,8.4l1.301-7.582l21.324,39.667L254.367,35.129z"/>
            <path id="aa2b" className="reveal" d="M239.625,8.4L239.625,8.4l1.301-7.582l0,0L239.625,8.4z"/>
            <path id="aa3" className="mask" d="M262.25,40.486h-21.224l2.526-5.356h14.572L262.25,40.486z"/>
            <path id="aa3b" className="reveal" d="M262.25,40.486L262.25,40.486l-4.125-5.356l0,0L262.25,40.486z"/>
          </g>
          <g id="N">
            <path id="n1" className="mask" d="M274.878,0.015v40.556h4.777V4.744"/>
            <path id="n1b" className="reveal" d="M274.878,40.571L274.878,40.571h4.777l0,0"/>
            <path id="n2" className="mask" d="M275.453,7.197l34.695,33.781l-4.777-11.282L274.878,0.015L275.453,7.197z"/>
            <path id="n2b" className="reveal" d="M275.359,6.759l0.0,0.0l-0.56-6.822l0,0L275.359,6.759z"/>
            <path id="n3" className="mask" d="M310.148,40.978V0.523h-4.777v35.517L310.148,40.978z"/>
            <path id="n3b" className="reveal" d="M310.148,40.978L310.148,40.978l-4.777-4.906v-0.016L310.148,40.978z"/>
          </g>
        </svg>
      </div>
    );
  }
}
