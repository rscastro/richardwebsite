import './_index.scss';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from '../ui-Home';
import Project from '../ui-Project';
import Lab from '../ui-Lab';
import Contact from '../ui-Contact';
import Nav from '../ui-Nav';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <Router history={browserHistory}>
            <Route path='work' name='work' component={Project} />
            <Route path='work/:projectId' component={Project}/>
            <Route path='labs/:labId' component={Lab}/>
            <Route path='contact' name='contact' component={Contact} />
            <Route path='*' component={ Home }/>
        </Router>
        <Nav />
      </div>
    );
  }
}
