import './_index.scss';

import React, { Component } from 'react';
import Logos from '../ui-Logos';

// Alias includes in the webpack.config files
import TweenLite from 'TweenLite';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import animationGsap from 'animation.gsap';
import debugAddIndicators from 'debug.addIndicators'; // via alias in the webpack.config files
//end webpack Alias includes


export default class Hero extends Component {

  constructor(props) {
    super(props)
    this.bgImgStyle = {};
    this.image = null;
    this.state = {
      imgLoaded: false
    }
  }

  static get propTypes() {
    return {
      mediaType: React.PropTypes.string, // img or video
      src: React.PropTypes.string, // src to image or video
      poster: React.PropTypes.string, // poster image for video, only used with video
      copy: React.PropTypes.string,
      projectColor: React.PropTypes.string,
      headerOverlayOpacity: React.PropTypes.string
    };
  }

  componentDidMount() {
    const { mediaType, src } = this.props;
    const { imgLoaded } = this.state;
    if ( mediaType === 'img' && !imgLoaded && src ) {
      this.bgImgStyle = {
        backgroundImage: `url('${ src }')`,
        backgroundBlendMode: 'multiply',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }
      this.loadBgImage(src);
    }

    if ( mediaType === 'video') {
      this.setupVideoEvents();
    }

    this.setupHeroScrollingAnimation();
  }

  loadBgImage(src) {
    this.image = new Image();
    this.image.src = src;
    this.image.onload = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState({
      imgLoaded: true
    })
  }

  setupVideoEvents() {
    var vid = document.getElementsByTagName('video')[0];
    vid.addEventListener('canplay', function() {
      vid.play();
    }, true);
  }

  setupHeroScrollingAnimation() {
    const duration = .75;
    const copyHldrWrapper = document.querySelector('.copy-hldr-wrapper');
    const colorOverlay = document.querySelector('.hero__color-overlay');

    const heroController = new ScrollMagic.Controller();
    const navTween = new TimelineMax()
      .to(colorOverlay, duration, { y:0 - colorOverlay.offsetHeight }, 0)
      .to(copyHldrWrapper, duration / 20, { alpha: 0 }, .15);

    const headerScene = new ScrollMagic.Scene({
      triggerElement: '.app-container',
      // offset: 50,
      triggerHook: 0,
      duration: '100%'
    })
    .setTween(navTween)
    .addTo(heroController)
    // headerScene.addIndicators({name: 'Hero animation'});

    const headerBodyPinScene = new ScrollMagic.Scene({
      triggerElement: '.app-container',
      triggerHook: 0,
      duration: '106%'
    })
    .addTo(heroController)
    .setPin('.project');
    // headerBodyPinScene.addIndicators({name: 'Hero animation'});
  }

  render() {
    const {
      copy,
      projectColor, // TODO: Remove headerOverlayOpacity this here and on json, no longer used.
      src,
      poster,
      mediaType,
      headerOverlayOpacity
    } = this.props;

    const { imgLoaded } = this.state;

    const fillColor =  {
      backgroundColor: '#' + projectColor,
      opacity: headerOverlayOpacity
    }

    return (
      <div className="hero">

        { (mediaType === 'img') ?
          <div className="hero__img" style={ imgLoaded ? this.bgImgStyle : {} }></div>
        : null }

        { (mediaType === 'video') ?
          <div className="hero__video">
            <video className="video-player"
              poster={ poster }
              autoPlay
              loop
              controls="true"
            >
              <source src={ src } type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* <video width="480" controls
              poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" >
              <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm" type="video/webm">
              <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4">
              <source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv" type="video/ogg">
              Your browser doesn't support HTML5 video tag.
            </video> */}

          </div>
        : null }

        <div className="hero__color-overlay" style={ fillColor }></div>

        <div className="wrapper copy-hldr-wrapper">
          <div className="copy-hldr">
            <div className="grid grid--justify-center">
              <div className="grid__col-12 grid__col-sm-10 grid__col-md-8">
                <h2>{copy}</h2>
              </div>
            </div>
          </div>
        </div>
        <Logos />
      </div>
    );
  }
}
