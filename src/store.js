import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleWare = process.env.NODE_ENV === 'production' ? [sagaMiddleware] : [sagaMiddleware, createLogger()];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWare),
    (typeof window.devToolsExtension === 'function') ? window.devToolsExtension() : f => f,
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
