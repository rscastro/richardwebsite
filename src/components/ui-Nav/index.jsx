import './index.scss';
const navData = require('../../assets/data/nav.json');
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import navAction from '../redux-actions/nav-actions.js';
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

// @connect (
//   state => state.items,
//   dispatch => bindActionCreators(navAction, dispatch)
// )
export default class Nav extends Component {

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
          <div className="grid">
            <div className="grid__col-4">
              <h2><img src={LogoType} alt={navData.title} className="logo-type" /></h2>
            </div>
            <div className="grid__col-4 text-center">
              <h2><img src={LogoMark} alt={navData.title} className="logo-mark" /></h2>
            </div>
            <div className="grid__col-4 text-right">
              <HamburgerIcon />
            </div>
          </div>
          <div className="grid nav">
            <div className="nav-column nav-column-about grid__col-12 grid__col-sm-4">
              <h3 className="title underline">{navData.aboutInfo.title}</h3>
              <p>{navData.aboutInfo.weAre}</p>
              <p>{navData.aboutInfo.address1}<br/>{navData.aboutInfo.address2}<br/>{navData.aboutInfo.phone}</p>
              <SocialMediaIcons />
            </div>
            { this.renderColumns(navData.navColumns) }
            {/* { this.setupScrollMagic() } */}
          </div>
        </div>
      </div>
    );
  }
}
