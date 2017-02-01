import notificationReducer from './notification/reducer';
import postsReducer from './posts/reducer';

const defaultState = {
  notification: null,
  posts: []
};

export default (previousState = defaultState, action) => {
  const newState = Object.assign({}, previousState);

  newState.notification = notificationReducer(previousState, action);
  newState.posts = postsReducer(previousState, action);

  return newState;
}