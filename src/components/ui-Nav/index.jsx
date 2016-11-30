import './_index.scss';
const navData = require('../../assets/data/nav.json');
import React, {Component} from 'react';

import NavColumn from '../ui-NavColumn'
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';
import HamburgerIcon from '../ui-HamburgerIcon';
import SocialMediaIcons from '../ui-SocialMediaIcons';

import TweenLite from 'TweenLite'; // via alias in the webpack.config files
// import TweenMax from 'TweenMax'; // via alias in the webpack.config files
import TimelineLite from 'TimelineLite'; // via alias in the webpack.config files
import ScrollMagic from 'ScrollMagic'; // via alias in the webpack.config files
import animationGsap from 'animation.gsap'; // via alias in the webpack.config files
import debugAddIndicators from 'debug.addIndicators'; // via alias in the webpack.config files


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
  }

  onChange() {
    const aniTime = .4;
    const phoneWidth = 480;

    if (this.state.navOpen) {

      this.setState({ navOpen: false });
      console.log('enable scroll or scrollmagic');
      // this.setupScrollMagic();

      // Close the nav
      TweenLite.to('.nav-bg', aniTime, {opacity:0, display:'none'});
      TweenLite.to('.logo-type', aniTime, {opacity:0, display:'none'});
      if (this.state.logoFadedOut === 1) {
        TweenLite.to('.logo-mark', aniTime, {opacity:0, display:'none'});
      }
      TweenLite.to('.nav-links', aniTime, {
        opacity:0,
        display:'none'
      });

    } else {

      this.setState({ navOpen: true });
      console.log('disable scroll or scrollmagic');
      // this.destroyScrollMagic()

      // Open the nav
      TweenLite.to('.nav-links', 0, {y:'-400'}); // This should be solved differently, hacky...
      TweenLite.to('.nav-bg', aniTime, {opacity:1, display:'block'});
      TweenLite.to('.logo-mark', aniTime, {opacity:1, display:'block'});
      if (this.state.screenWidth > phoneWidth) {
        TweenLite.to('.logo-type', aniTime, {
          opacity:1,
          display:'inline-block',
          delay:aniTime/2
        });
      }
      TweenLite.to('.nav-links', aniTime, {y:'0', opacity:1, display:'flex', delay:aniTime });

    }
  }

  renderColumns(columns) {
    return columns.map((column, index) => {
      return (
        <NavColumn
          key={ `nav-column-${index}` }
          title={column.title}
          className={column.className}
          listlinks={column.listlinks}
        />
      );
    });
  }

  toggleLogoState(logoState) {
    this.setState({ logoFadedOut: logoState });
  }

  setupScrollMagic() {
    let aniTime = .2;

    const toggleLogoState = this.toggleLogoState.bind(this);

    // Logo mark fade out
    // this.logoController = new ScrollMagic.Controller({loglevel: 3});
    this.logoController = new ScrollMagic.Controller();
    const logoTween = TweenLite.to('.logo-mark', aniTime, { opacity: '0', display:'none'});
    const logoScene = new ScrollMagic.Scene({
      triggerElement: '.app-container',
      offset: 70,
      triggerHook: 0,
    })
    .setTween(logoTween)
    .addTo(this.logoController)
    .on('start', function (event) {
      toggleLogoState(event.progress)
    });
    // logoScene.addIndicators({name: 'logo fade'});

    // Hamburger fade out
    this.hamburgerController = new ScrollMagic.Controller();
    const hamburgerTween = TweenLite.to('.hamburger-icon', aniTime, {opacity: '0', display:'none'});
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
        <div className="nav-bg"></div>
        <div className="wrapper">

          <div className="nav-bar">
            <div className="grid">
              <div className="grid__col-12 text-center logo-mark-hldr">
                <img src={LogoType} alt={navData.title} className="logo-type" />
                <img src={LogoMark} alt={navData.title} className="logo-mark" />
                <HamburgerIcon navOpen={this.state.navOpen} className="hamburger" onToggleNav={this.onChange.bind(this)} />
              </div>
            </div>
          </div>

          <div className="nav-links">
            <div className="grid">
              <div className="nav-column nav-column-about grid__col-12 grid__col-sm-4">
                <h3 className="title underline">{navData.aboutInfo.title}</h3>
                <p>
                  {navData.aboutInfo.weAre}<br/>
                  <span className="contact">{navData.aboutInfo.phone}</span><br/>
                  <span className="contact"><a href={'mailto:' + navData.aboutInfo.email}>{navData.aboutInfo.email}</a></span><br/>
                  <span className="addr">{navData.aboutInfo.address1}</span><br/>
                  <span className="addr">{navData.aboutInfo.address2}</span><br/>
                </p>
                <SocialMediaIcons />
              </div>
              { this.renderColumns(navData.navColumns) }
            </div>
          </div>

        </div>
      </div>
    );
  }
}
