import './index.scss';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from '../ui-Home';
import Project from '../ui-Project';
import Contact from '../ui-Contact';
import Nav from '../ui-Nav';
import Footer from '../ui-Footer';


export default class AppContainer extends React.Component {
  render() {
    return (
      <div className="app-container">

        <Router history={browserHistory}>
          <Route path='/' name='home' component={Home} />
          <Route path='/work' name='work' component={Project} />
          <Route path='/contact' name='contact' component={Contact} />
        </Router>

        <Nav />
        <Footer />
      </div>
    );
  }
}
