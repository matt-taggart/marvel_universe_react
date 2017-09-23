import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './components/nav';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
