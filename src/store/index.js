import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import ping from './ping/reducers';
import pingEpic from './ping/epics';
import user from './user/reducers';
import userEpic from './user/epics';

const rootReducer = combineReducers({
  ping,
  user,
});

const rootEpic = combineEpics(pingEpic, userEpic);

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}
