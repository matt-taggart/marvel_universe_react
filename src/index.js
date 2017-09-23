import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
