import test from 'tape';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

// Stubs
const clock = sinon.useFakeTimers();
const fetchStub = sinon.stub();
const dispatchStub = sinon.stub();
const showInfoStub = sinon.stub();
const showErrorStub = sinon.stub();
const hideInfoStub = sinon.stub();

const setup = () => {
  fetchStub.reset();
  dispatchStub.reset();
  showInfoStub.reset();
  showErrorStub.reset();
  hideInfoStub.reset();

  return proxyquire('./actions', {
    'isomorphic-fetch': fetchStub,
    '../notification/actions': {
      showInfo: showInfoStub,
      showError: showErrorStub,
      hideInfo: hideInfoStub
    }
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
  assert.equals(showInfoStub.callCount, 1, 'Show info was called');
  assert.equals(showErrorStub.callCount, 1, 'Show error was called');
  assert.end();
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

  assert.equals(showInfoStub.callCount, 1, 'Show info was called');
  assert.equals(showErrorStub.callCount, 1, 'Show error was called');
  assert.end();
});

test('refreshPosts should handle a successful call', (assert) => {
  const response = {
    ok: true,
    json: () => {
      return {
        then: (func) => func()
      };
    }
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

  clock.tick(10001);

  assert.equals(showInfoStub.callCount, 1, 'Show info was called');
  assert.equals(hideInfoStub.callCount, 1, 'Hide info was called');
  assert.end();
});