import './index.scss';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Data
// const appData = require('../../assets/data/data.json'); // Remove eventually


import Home from '../ui-Home';
import Work from '../ui-Work';
import Contact from '../ui-Contact';
import Nav from '../ui-Nav';
import Footer from '../ui-Footer';


export default class AppContainer extends React.Component {

  render() {
    // const {
    //   appData: {
    //     nav,
    //     homeHero,
    //     projectHero,
    //     tagline,
    //     sectionHeader1,
    //     sectionHeader2,
    //     textColumns,
    //     img,
    //     video,
    //     carousel,
    //     work,
    //     work: {
    //       projects
    //     },
    //     footer
    //   }
    // } = this.props;

    return (
      <div className="app-container">

        <Router history={browserHistory}>
          <Route path='/' name='home' component={Home} />
          <Route path='/work' name='work' component={Work} />
          <Route path='/contact' name='contact' component={Contact} />
        </Router>

        <Nav />
        <Footer />
      </div>
    );
  }
}
