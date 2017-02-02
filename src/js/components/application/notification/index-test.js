import test from 'tape';
import {shallow} from 'enzyme';
import {Notification} from './index';
import {hh} from 'react-hyperscript-helpers';

const setup = () => {
  return hh(Notification);
};

test('Notification should render a div with a close button, a title and a message', (assert) => {
  const NotificationHelper = setup();
  const wrapper = shallow(NotificationHelper({showing: true, message: 'A message', title: 'A title'}));

  assert.equals(wrapper.find('p.close').length, 1, 'A close button was rendered');
  assert.equals(wrapper.find('h3').length, 1, 'A title was rendered');
  assert.equals(wrapper.find('.message').length, 1, 'A message was rendered');
  assert.end();
});

test('Notification doesn\'t render a title if none is supplied', (assert) => {
  const NotificationHelper = setup();
  const wrapper = shallow(NotificationHelper({showing: true, message: ''}));

  assert.equals(wrapper.find('h3').length, 0, 'No title was rendered');
  assert.end();
});