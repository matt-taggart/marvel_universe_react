import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import charactersSaga from './sagas/characters';

const sagaMiddleware = createSagaMiddleware();
const middleWare = process.env.dev ? [sagaMiddleware] : [sagaMiddleware, createLogger()];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWare),
    (typeof window.devToolsExtension === 'function') ? window.devToolsExtension() : f => f    
  )
);

sagaMiddleware.run(charactersSaga);

export default store;
