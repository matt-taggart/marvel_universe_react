import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
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

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);
