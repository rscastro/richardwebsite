import './_index.scss';

import React, { Component } from 'react';
import LogoMark from '../../assets/images/logo-mark.svg';
import LogoType from '../../assets/images/logo-type.svg';

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
      src: React.PropTypes.string, // src to image
      copy: React.PropTypes.string,
      projectColor: React.PropTypes.string,
      headerOverlayOpacity: React.PropTypes.string
    };
  }

  componentDidMount() {
    const { src, headerOverlayOpacity } = this.props;
    const { imgLoaded } = this.state;
    if (!imgLoaded && src) {
      this.bgImgStyle = {
        backgroundImage: `url('${ src }')`,
        backgroundBlendMode: 'multiply',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: headerOverlayOpacity
      }
      this.loadBgImage(src);
    }
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

  render() {
    const {
      copy,
      projectColor // TODO: Remove headerOverlayOpacity this here and on json, no longer used.
    } = this.props;

    const { imgLoaded } = this.state;

    const fillColor =  {
      backgroundColor: '#' + projectColor
    }

    return (
      <div className="hero">
        <div className="hero__color-overlay" style={ fillColor }></div>
        <div
          className="hero__img"
          style={ imgLoaded ? this.bgImgStyle : {} }></div>
        <div className="wrapper">
          <div className="copy-hldr">
            <div className="grid grid--justify-center">
              <div className="grid__col-12 grid__col-sm-10 grid__col-md-8">
                <h2>{copy}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <div className="wrapper">
            <div className="nav-bar-inner text-center">
              <a className="logo-type-a" href="/">
                <img ref="logoType" src={LogoType} alt="Martian logo type" className="logo-type" />
              </a>
              <a className="logo-mark-a" href="/">
                <img ref="logoMark" src={LogoMark} alt="Martian logo mark" className="logo-mark" />
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
