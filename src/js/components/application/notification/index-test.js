import test from 'tape';
import {shallow} from 'enzyme';
import Notification from './index';

test('Notification should render a div with a close button, a title and a message', (assert) => {
  const wrapper = shallow(Notification({message: 'A message', title: 'A title'}));

  assert.equals(wrapper.find('p.close').length, 1, 'A close button was rendered');
  assert.equals(wrapper.find('h3').length, 1, 'A title was rendered');
  assert.equals(wrapper.find('.message').length, 1, 'A message was rendered');
  assert.end();
});

test('Notification doesn\'t render a title if none is supplied', (assert) => {
  const wrapper = shallow(Notification({message: ''}));

  assert.equals(wrapper.find('h3').length, 0, 'No title was rendered');
  assert.end();
});

test('Notification closes after click on close', (assert) => {
  const wrapper = shallow(Notification({message: ''}));

  assert.equals(wrapper.find('.notification').length, 1, 'Notification was rendered before click');
  wrapper.find('.close').simulate('click');
  assert.equals(wrapper.find('.notification').length, 0, 'Notification was not rendered after click');
  assert.end();
});