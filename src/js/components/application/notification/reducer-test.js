import test from 'tape';
import {SHOW_INFO, SHOW_ERROR} from './actions';
import reducer from './reducer';

const defaultState = {
  type: null,
  title: 'Kalle Ninja',
  message: 'Kaststjernor och pikadoller'
};

test('Notification reducer returns an unchanged error for a bogus action', (assert) => {
  const oldState = Object.assign({}, defaultState);
  const bogusAction = {type: 'BOGUS_ACTION'};
  const newState = reducer(oldState, bogusAction);

  assert.equals(newState.type, oldState.type, 'State type has not changed');
  assert.equals(newState.title, oldState.title, 'State title has not changed');
  assert.equals(newState.message, oldState.message, 'State message has not changed');
  assert.end();
});

test('Notification reducer returns an info notification if action is info', (assert) => {
  const oldState = Object.assign({}, defaultState);
  const bogusAction = {
    type: SHOW_INFO,
    payload: {
      type: 'info',
      title: 'Monster Mash',
      message: 'He did the mash, he did the monster mash'
    }
  };
  const newState = reducer(oldState, bogusAction);

  assert.equals(newState.type, 'info', 'State type has not changed');
  assert.equals(newState.title, bogusAction.payload.title, 'State title has not changed');
  assert.equals(newState.message, bogusAction.payload.message, 'State message has not changed');
  assert.end();
});

test('Notification reducer returns an error notification if action is error', (assert) => {
  const oldState = Object.assign({}, defaultState);
  const bogusAction = {
    type: SHOW_ERROR,
    payload: {
      type: 'error',
      title: 'Monster Mash 2',
      message: 'The monster mash, it was a graveyard smash'
    }
  };
  const newState = reducer(oldState, bogusAction);

  assert.equals(newState.type, 'error', 'State type has not changed');
  assert.equals(newState.title, bogusAction.payload.title, 'State title has not changed');
  assert.equals(newState.message, bogusAction.payload.message, 'State message has not changed');
  assert.end();
});