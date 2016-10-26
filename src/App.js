import React, { Component } from 'react';
import AppContainer from './components/ui-AppContainer';

const appData = require('./assets/data/data.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContainer appData={appData} />
      </div>
    );
  }
}

export default App;
