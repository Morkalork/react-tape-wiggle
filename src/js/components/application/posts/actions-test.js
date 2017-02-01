import test from 'tape';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import {FAIL_POST_LOAD} from './actions';

// Stubs
const fetchStub = sinon.stub();
const dispatchStub = sinon.stub();

const setup = () => {
  return proxyquire('./actions', {
    'isomorphic-fetch': fetchStub
  });
};

test('refreshPosts should handle a call failures', (assert) => {
  // Create a return promise that automatically rejects everything
  const promise = {
    then: () => promise, // Do nothing except returning yourself
    catch: (func) => func()
  };

  // Set the fetch stub to always return the failing promise
  fetchStub.returns(promise);

  // Get a fresh copy of the action module
  const actions = setup();

  // Call the refreshPosts function and receive a thunk
  const thunk = actions.refreshPosts();

  // Execute the thunk and give it our dispatchStub so we can spy on it.
  // The result doesn't matter since we will spy on the dispatchStub for verification
  thunk(dispatchStub);

  // Verify that the dispatchStub was called and that the argument passed in
  // was an object with a property type matching the failure action
  assert.notEquals(dispatchStub.lastCall, null, 'There is a dispatch call');
  assert.equals(dispatchStub.lastCall.args[0].type, FAIL_POST_LOAD, 'Call failed');
  assert.end();

  // Reset the changes we made to the stubs
  fetchStub.reset();
  dispatchStub.reset();
});

test('refreshPosts should handle a successful call with a failed payload', (assert) => {
  // A response object that contains a failure
  const response = {
    ok: false
  };
  const promise = {
    then: (func) => {
      func(response);

      return promise;
    },
    catch: () => promise
  };
  fetchStub.returns(promise);
  const actions = setup();
  const thunk = actions.refreshPosts();
  thunk(dispatchStub);

  assert.notEquals(dispatchStub.lastCall, null, 'There is a dispatch call');
  assert.equals(dispatchStub.lastCall.args[0].type, FAIL_POST_LOAD, 'Call failed');
  assert.end();

  fetchStub.reset();
  dispatchStub.reset();
});