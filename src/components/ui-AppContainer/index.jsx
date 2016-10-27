import './index.scss';

import React from 'react';
import Header from '../ui-Header';
import Nav from '../ui-Nav';
import Hero from '../ui-Hero';
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
            projects
        }
    } = this.props;

    return (
      <div className="app-container">
        <Header/>
        <Nav data={nav}/>
        <Hero/>
        <ProjectsContainer projects={projects}/>
        <Footer/>
      </div>
    );
  }
}
