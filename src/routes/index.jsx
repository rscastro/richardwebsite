import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/ui-AppContainer';
import Home from '../components/ui-Home';
import Project from '../components/ui-Project';
import Lab from '../components/ui-Lab';
import Contact from '../components/ui-Contact';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='work' name='work' component={Project} />
      <Route path='work/:projectId' component={Project}/>
      <Route path='labs/:labId' component={Lab}/>
      <Route path='contact' name='contact' component={Contact} />
      <Route path='*' component={ Home } />
    </Route>
  </Router>
);
