import './index.scss';

import React from 'react';
import Header from '../ui-Header';
import Nav from '../ui-Nav';
import HomeHero from '../ui-HomeHero';
import ProjectsContainer from '../ui-Projects/ProjectsContainer';
import Footer from '../ui-Footer';

export default class AppContainer extends React.Component {
  static get propTypes() {
    return {appData: React.PropTypes.object};
  }

  render() {
    const {
      appData: {
        nav,
        hero,
        projects,
        footer
      }
    } = this.props;

    return (
      <div className="app-container">
        <Nav data={nav} />
        <Header />
        <HomeHero data={hero} />
        <ProjectsContainer projects={projects} />
        <Footer data={footer} />
      </div>
    );
  }
}
