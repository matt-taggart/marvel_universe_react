import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import history from './utils/history';
import App from './containers/app';

//Note: Must use Router component and pass history manually 
//rather than BrowserRouter component to use redirect with Redux Saga

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('app'),
);
