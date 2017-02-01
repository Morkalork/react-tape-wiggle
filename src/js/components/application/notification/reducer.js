import {SHOW_INFO, SHOW_ERROR} from './actions';

export default (previousState, action) => {
  let newState = Object.assign({}, previousState);

  switch (action.type) {
  case SHOW_INFO:
    newState = action.payload;
    break;

  case SHOW_ERROR:
    newState = action.payload;
    break;
  }

  return newState;
};