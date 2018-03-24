import React, { Component } from 'react';
import Bootcamp2Container from './components/Bootcamp2/Bootcamp2Container';
import SwapiContainer from './components/Swapi/SwapiContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Bootcamp2Container />
        <SwapiContainer />
      </React.Fragment>
    );
  }
}

export default App;
