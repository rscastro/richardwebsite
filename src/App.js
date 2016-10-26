import React, { Component } from 'react';
import AppContainer from './components/ui-AppContainer';
// import PeopleContainer from './components/ui-Projects/PeopleContainer';

const appData = require('./assets/data/data.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContainer appData={appData} />
        {/* <PeopleContainer /> */}
      </div>
    );
  }
}

export default App;
