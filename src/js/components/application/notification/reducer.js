import {SHOW_INFO, SHOW_ERROR, HIDE_NOTIFICATION} from './actions';

export default (previousState, action) => {
  let newState = Object.assign({}, previousState);

  switch (action.type) {
  case SHOW_INFO:
  case SHOW_ERROR:
  case HIDE_NOTIFICATION:
    newState = action.payload;
    break;
  }

  return newState;
};