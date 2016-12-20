import './_index.scss';
const navData = require('../../assets/data/nav.json');
import React, {Component} from 'react';

import NavLinks from '../ui-NavLinks'
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';
import HamburgerIcon from '../ui-HamburgerIcon';

// Alias includes in the webpack.config files
import TweenLite from 'TweenLite';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import animationGsap from 'animation.gsap';
//import debugAddIndicators from 'debug.addIndicators'; // via alias in the webpack.config files
//end webpack Alias includes

export default class Nav extends Component {

  constructor() {
    super();

    this.state = {
      navOpen: false,
      screenWidth: document.body.clientWidth,
      logoFadedOut: 0
    }

    this.logoController = {};
    this.hamburgerController = {};

    this.phoneWidth = 480;
  }

  onToggleNav() {
    const duration = .4;
    const logoMarkNode = this.refs.logoMark;
    const logoTypeNode = this.refs.logoType;

    const {
      logoFadedOut,
      navOpen,
      screenWidth
    } = this.state;

    if (navOpen) {
      this.setState({ navOpen: false });
      this.setupScrollMagic();
      // Close the nav
      TweenLite.to('.nav-bg', duration, {opacity:0, display:'none'});
      TweenLite.to(logoTypeNode, duration, {opacity:0, display:'none'});
      TweenLite.to(logoMarkNode, duration, {opacity:0, display:'none'});
      TweenLite.to('.nav-links-hldr', duration, {opacity:0, display: 'none' });
      TweenLite.to('.nav-links', duration, { opacity:0, display:'none' });

    } else {
      this.setState({ navOpen: true });
      this.destroyScrollMagic();
      // Open the nav
      TweenLite.to('.nav-links', 0, {y:'-100'}); // This should be solved differently, hacky...
      TweenLite.to('.nav-bg', duration, {opacity:1, display:'block'});
      TweenLite.to(logoMarkNode, duration, {opacity:1, display:'inline-block'});
      if (screenWidth > this.phoneWidth) {
        TweenLite.to(logoTypeNode, duration, { opacity:1, display:'inline-block', delay:duration/2 });
      }
      TweenLite.to('.nav-links-hldr', duration, {opacity:1, display: 'block' });
      TweenLite.to('.nav-links', duration, {y:'0', opacity:1, display: 'flex', delay: duration });
    }
  }

  toggleLogoState(logoState) {
    this.setState({ logoFadedOut: logoState });
  }

  setupScrollMagic() {
    const duration = .2;
    const toggleLogoState = this.toggleLogoState.bind(this);

    const {
      screenWidth
    } = this.state;

    // Logo mark fade out
    this.logoController = new ScrollMagic.Controller();
    const navTween = new TimelineMax();
    if (screenWidth <= this.phoneWidth) {
      navTween.to('.hamburger-icon', duration, { top:'-15' }, 0);
    }

    const logoScene = new ScrollMagic.Scene({
      triggerElement: '.page-content-hldr',
      offset: -75,
      triggerHook: 0,
    })
    .setTween(navTween)
    .addTo(this.logoController)
    .on('start', function (event) {
      toggleLogoState(event.progress)
    });
    // logoScene.addIndicators({name: 'logo fade'});

    // Hamburger fade out
    this.hamburgerController = new ScrollMagic.Controller();
    const hamburgerTween = TweenLite.to('.hamburger-icon', duration, {opacity: '0', display:'none'});
    const hamburgerScene = new ScrollMagic.Scene({
      triggerElement: '.nav-footer-links',
      triggerHook: 0.9
    })
    .setTween(hamburgerTween)
    .addTo(this.hamburgerController);
    // hamburgerScene.addIndicators({name: 'hamburger fade'});
  }

  destroyScrollMagic() {
    this.logoController.destroy(true);
    this.logoController = null;
    this.hamburgerController.destroy(true);
    this.hamburgerController = null;
  }

  updateScreenDims() {
    this.setState({ screenWidth: document.body.clientWidth });
  }

  componentDidMount() {
    this.setupScrollMagic();
    window.addEventListener('resize', this.updateScreenDims.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenDims);
    this.destroyScrollMagic();
  }

  render() {
    return (
      <div className="nav-hldr">
        <div className="nav-bg"/>
        <div className="wrapper">

          <div className="nav-links-hldr">
            <div className="nav-links">
              <div className="grid">
                <NavLinks navData={ navData } />
              </div>
            </div>
          </div>

          <div className="nav-bar">
            <div className="wrapper">
              <div className="nav-bar-inner text-center">
                <a ref="logoType" className="logo-type-a" href="/">
                  <img src={LogoType} alt={navData.title} className="logo-type" />
                </a>
                <a ref="logoMark" className="logo-mark-a" href="/">
                  <img src={LogoMark} alt={navData.title} className="logo-mark" />
                </a>
                <HamburgerIcon navOpen={this.state.navOpen} className="hamburger" onToggleNav={this.onToggleNav.bind(this)} />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
