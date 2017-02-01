import test from 'tape';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

// Stubs
const defaultNotification = {type: 'default'};
const notificationReducerStub = sinon.stub();
const postsReducerStub = sinon.stub();

const setup = () => {
  notificationReducerStub.reset();
  notificationReducerStub.returns(defaultNotification);

  postsReducerStub.reset();
  postsReducerStub.returns([]);

  return proxyquire('./reducer', {
    './notification/reducer': {default: notificationReducerStub},
    './posts/reducer': {default: postsReducerStub}
  }).default;
};

const defaultState = {
  notification: defaultNotification,
  posts: []
};

test('Application reducer returns the default state if nothing is supplied', (assert) => {
  const reducer = setup();
  const newState = reducer();

  assert.equals(newState.notification.type, defaultState.notification.type, 'Notification is default');
  assert.equals(newState.posts.length, 0, 'Posts is default');
  assert.end();
});

test('Application reducer returns the same state if a bogus action is sent in', (assert) =>  {
  const reducer = setup();
  const action = {
    type: 'BOGUS_ACTION'
  };

  const previousState = Object.assign({}, defaultState);
  const newState = reducer(previousState, action);

  assert.equals(newState.notification, previousState.notification, 'Notification has not changed');
  assert.equals(newState.posts.length, 0, 'Posts has not changed');
  assert.end();
});

test('Application reducer calls the notification reducer', (assert) => {
  const reducer = setup();
  const notification = {type: 'info'};
  notificationReducerStub.returns(notification);

  const action = {
    type: 'WHO_CARES'
  };

  const previousState = Object.assign({}, defaultState);
  const newState = reducer(previousState, action);

  assert.equals(notificationReducerStub.callCount, 1, 'Notification reducer was called');
  assert.equals(newState.notification.type, notification.type, 'Notification was set to state');
  assert.end();
});

test('Application reducer calls the posts reducer', (assert) => {
  const reducer = setup();
  const posts = [1, 2, 3];
  postsReducerStub.returns(posts);

  const action = {
    type: 'I_CARE'
  };

  const previousState = Object.assign({}, defaultState);
  const newState = reducer(previousState, action);

  assert.equals(postsReducerStub.callCount, 1, 'Posts reducer was called');
  assert.equals(newState.posts.length, posts.length, 'Posts were set to state');
  assert.end();
});