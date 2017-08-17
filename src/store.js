import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import reducers from './redux-modules/reducers';
import sagas from './redux-modules/sagas';

const middleware = routerMiddleware(browserHistory);

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware, middleware)
  );
  sagaMiddleware.run(sagas);
  return store;
}
