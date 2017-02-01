import test from 'tape';
import reducer from './reducer';
import {SET_POSTS} from './actions';

test('PostReducer returns the same state if no action is taken', (assert) => {
  const action = {
    type: 'FAKE_ACTION'
  };

  const post = {id: 1};
  const state = {
    posts: [post]
  };
  const newState = reducer(state, action);

  assert.equals(newState.posts.length, state.posts.length, 'The same amount of posts are still available');
  assert.equals(newState.posts[0].id, post.id, 'The same post is available');
  assert.end();
});

test('PostReducer returns a new state with the correct posts after a SET_POSTS call', (assert) => {
  const posts = [
    {id: 1},
    {id: 2}
  ];

  const action = {
    type: SET_POSTS,
    payload: posts
  };

  const state = {
    posts: []
  };
  const newState = reducer(state, action);

  assert.equals(newState.posts.length, posts.length, 'The number of posts is correct');
  assert.equals(newState.posts[0].id, posts[0].id, 'The first post is correct');
  assert.equals(newState.posts[1].id, posts[1].id, 'The second post is correct');
  assert.end();
});