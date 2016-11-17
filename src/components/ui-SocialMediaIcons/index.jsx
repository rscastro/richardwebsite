import './index.scss';

import React, { Component } from 'react';

import AngellistSvg from '../../assets/images/icons/angellist-icon.svg';
import LinkedinSvg from '../../assets/images/icons/linkedin-icon.svg';
import FacebookSvg from '../../assets/images/icons/facebook-icon.svg';
import TwitterSvg from '../../assets/images/icons/twitter-icon.svg';
import InstagramSvg from '../../assets/images/icons/instagram-icon.svg';
import CodepenSvg from '../../assets/images/icons/codepen-icon.svg';
import GithubSvg from '../../assets/images/icons/github-icon.svg';


export default class SocialMediaIcons extends Component {
  render() {
    return (
      <div className="social-icons">
        <ul className="social-icons-list">
          <li>
            <a href="https://www.linkedin.com/company/15165969" className="icon-link" target="_blank">
              <span className="screen-reader-only">LinkedIn</span>
              <img src={LinkedinSvg} alt="LinkedIn icon"/>
            </a>
          </li>
          <li>
            <a href="https://angel.co/martian" className="icon-link" target="_blank">
              <span className="screen-reader-only">Angellist</span>
              <img src={AngellistSvg} alt="Angellist icon"/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/martiansf" className="icon-link" target="_blank">
              <span className="screen-reader-only">Facebook</span>
              <img src={FacebookSvg} alt="Facebook icon"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/martiansf" className="icon-link" target="_blank">
              <span className="screen-reader-only">Twitter</span>
              <img src={TwitterSvg} alt="Twitter icon"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/martianmartianmartian" className="icon-link" target="_blank">
              <span className="screen-reader-only">Instagram</span>
              <img src={InstagramSvg} alt="Instagram icon"/>
            </a>
          </li>
          <li>
            <a href="https://codepen.io/martiansf" className="icon-link" target="_blank">
              <span className="screen-reader-only">Codepen</span>
              <img src={CodepenSvg} alt="Codepen icon"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/martiansf" className="icon-link" target="_blank">
              <span className="screen-reader-only">Github</span>
              <img src={GithubSvg} alt="Github icon"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
