import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import ping from './ping/reducers';
import pingEpic from './ping/epics';

const rootReducer = combineReducers({
  ping,
});

const rootEpic = combineEpics(pingEpic);

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}
