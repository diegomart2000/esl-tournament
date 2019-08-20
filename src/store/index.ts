import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSagas from './sagas';
import rootReducer, { State } from './reducers';

const sagaMiddleware = createSagaMiddleware();
const w: any = window as any;

const devTools = 
  w['__REDUX_DEVTOOLS_EXTENSION__'] 
  ? w['__REDUX_DEVTOOLS_EXTENSION__']
  : (() => (x: any) => x);

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  devTools(),
);

const store = createStore(
  rootReducer,
  {} as State,
  enhancers,
);

rootSagas.map(sagaMiddleware.run);

export default store;
export * from './reducers';