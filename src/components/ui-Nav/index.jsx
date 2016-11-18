import './index.scss';
const navData = require('../../assets/data/nav.json');
import React, {Component} from 'react';

import NavColumn from './navColumn.jsx'
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';
import HamburgerIcon from '../ui-HamburgerIcon';
import SocialMediaIcons from '../ui-SocialMediaIcons';
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
    if (this.state.navOpen) {
      this.setState({ navOpen: false });
    } else {
      this.setState({ navOpen: true });
    }
  }

  renderColumns(columns) {
    return columns.map((column, index) => {
      return (
        <NavColumn key={'nav-column-' + index} data={column} />
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
        <div className="wrapper">

          <div className="nav-bar">
            <div className="grid">
              <div className="grid__col-4 logo-type-hldr">
                <h2><img src={LogoType} alt={navData.title} className="logo-type" /></h2>
              </div>
              <div className="grid__col-4 text-center logo-mark-hldr">
                <h2><img src={LogoMark} alt={navData.title} className="logo-mark" /></h2>
              </div>
              <div className="grid__col-4 text-right">
                <HamburgerIcon navOpen={this.state.navOpen} onToggleNav={this.onChange.bind(this)} />
              </div>
            </div>
          </div>

          { this.state.navOpen ?
            <div className="grid nav-links">
              { this.renderColumns(navData.navColumns) }
              <div className="nav-column nav-column-about grid__col-12 grid__col-sm-4">
                <h3 className="title underline">{navData.aboutInfo.title}</h3>
                <p>{navData.aboutInfo.weAre}</p>
                <p>{navData.aboutInfo.address1}<br/>{navData.aboutInfo.address2}<br/>{navData.aboutInfo.phone}</p>
                <SocialMediaIcons />
              </div>
            </div>
          : null }

        </div>
      </div>
    );
  }
}
