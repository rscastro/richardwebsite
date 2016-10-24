import React, { Component } from 'react';
import './App.css';
import PeopleContainer from './components/PeopleContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>The app</p>
        <PeopleContainer />
      </div>
    );
  }
}

export default App;
