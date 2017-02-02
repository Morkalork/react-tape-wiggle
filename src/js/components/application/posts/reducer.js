import {SET_POSTS} from './actions';

/**
 * A reducer that handles the posts on the page
 * @param previousState The state of posts is an array of the posts
 * @param action The action taken that invoked this reducer
 */
export default (previousState = [], action) => {
  let newState = previousState.slice();

  switch (action.type) {
  case SET_POSTS:
    newState = action.payload;
    break;
  }

  return newState;
};