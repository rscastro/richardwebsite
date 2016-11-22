import './index.scss';
const navData = require('../../assets/data/nav.json');
import React, {Component} from 'react';

import NavColumn from './navColumn.jsx'
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';
import HamburgerIcon from '../ui-HamburgerIcon';
import SocialMediaIcons from '../ui-SocialMediaIcons';

import TweenLite from 'gsap';

// import TweenLite from 'TweenLite'; // via alias in the webpack.config files
// import TimelineLite from 'TimelineLite' // via alias in the webpack.config files

// import ScrollMagic from 'scrollmagic';
// require('scrollmagic/plugins/animation.gsap');
// require('scrollmagic/plugins/debug.addIndicators.js');
// import ScrollMagicDebug from 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.js';
// const ScrollMagic = require('ScrollMagic');
// require('animation.gsap');
// require('debug.addIndicators');
// const TimelineMax = require('TimelineMax');

export default class Nav extends Component {

  constructor() {
    super();
    this.state = {
      navOpen: false
    }
  }

  onChange() {
    let aniTime = .4;

    if (this.state.navOpen) {
      this.setState({ navOpen: false });
      // Close the nav
      TweenLite.to('.nav-bg' , aniTime, {opacity:0, display:'none'});
      TweenLite.to('.logo-type' , aniTime, {opacity:0, display:'none'});
      TweenLite.to('.nav-links' , aniTime, {
        opacity:0,
        display:'none'
      });
    } else {
      this.setState({ navOpen: true });
      // Open the nav
      TweenLite.to('.nav-links' , 0, {y:'-400'}); // This should be solved differently, hacky...
      TweenLite.to('.nav-bg' , aniTime, {opacity:1, display:'block'});
      TweenLite.to('.logo-type' , aniTime, {
        opacity:1,
        display:'inline-block',
        delay:aniTime/2
      });
      TweenLite.to('.nav-links' , aniTime, {y:'0', opacity:1, display:'flex', delay:aniTime });
    }
  }

  renderColumns(columns) {
    return columns.map((column, index) => {
      return (
        <NavColumn
          key={ `nav-column-${index}` }
          title={column.title}
          className={column.className}
          links={column.links}
        />
      );
    });
  }

  // setupScrollMagic() {
  //   // init controller
  //   var controller = new ScrollMagic.Controller();
  //
  //   let scene = new ScrollMagic.Scene({
  //     triggerElement: '.nav-hldr'
  //   })
	// 	.setTween('.text-center', 0.5, {backgroundColor: 'green'}) // trigger a TweenMax.to tween
	// 	.addIndicators({name: '1 (duration: 0)'}) // add indicators (requires plugin)
	// 	.addTo(controller);
  // }

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

          <div className="grid nav-links">
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
    );
  }
}
