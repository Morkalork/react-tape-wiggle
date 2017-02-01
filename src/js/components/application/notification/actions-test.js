import test from 'tape';
import {SHOW_INFO, SHOW_ERROR, showInfo, showError} from './actions';

test('showInfo should return an information type notification action', (assert) => {
  const result = showInfo('hello');

  assert.equals(result.type, SHOW_INFO, 'The correct type is set');
  assert.end();
});

test('showInfo should return a correct payload', (assert) => {
  const message = 'A mighty message';
  const title = 'A tickeling title';
  const result = showInfo(message, title);

  assert.equals(result.payload.message, message, 'The correct message was set');
  assert.equals(result.payload.title, title, 'The correct title was set');
  assert.equals(result.payload.type, 'info', 'The correct type was set');
  assert.end();
});

test('showError should return an error type notification action', (assert) => {
  const result = showError('badness');

  assert.equals(result.type, SHOW_ERROR, 'The correct type is set');
  assert.end();
});

test('showError should return a correct payload', (assert) => {
  const message = 'An empathic error';
  const title = 'A tormenting title';
  const result = showError(message, title);

  assert.equals(result.payload.message, message, 'The correct message was set');
  assert.equals(result.payload.title, title, 'The correct title was set');
  assert.equals(result.payload.type, 'error', 'The correct type was set');
  assert.end();
});