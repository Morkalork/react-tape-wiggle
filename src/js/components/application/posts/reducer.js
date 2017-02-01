import {SET_POSTS} from './actions';

/**
 * A reducer that handles the posts on the page
 * @param previousState The state of posts is an array of the posts
 * @param action The action taken that invoked this reducer
 */
export default (previousState = [], action) => {
  const newState = Object.assign({}, previousState);

  switch (action.type) {
  case SET_POSTS:
    newState.posts = action.payload;
    break;
  }

  return newState;
};