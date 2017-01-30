import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from '@benmosher/redux-promise';
import createLogger from 'redux-logger';
import applicationReducer from './js/components/application/reducer';

const logger = createLogger();

export default (initialState) => {
  const appStore = createStore(
    applicationReducer,
    initialState,
    applyMiddleware(promise, thunk, logger)
  );

  return appStore;
};