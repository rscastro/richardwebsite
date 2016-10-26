import React, { Component } from 'react';
import './App.css';
import PeopleContainer from './components/ui-projects/PeopleContainer';

const appData = require('./assets/data/data.json');

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>The app</p>
        <h4>{appData.testCopy.title}</h4>
        <p>{appData.testCopy.subtitle}</p>
        <PeopleContainer />
      </div>
    );
  }
}

export default App;
