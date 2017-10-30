import createBrowserHistory from 'history/createBrowserHistory';

// NOTE: Discussed in issue 3972 on GitHub. 
// Must export shared instance of browser history to use directly with Redux Saga.

export default createBrowserHistory();
