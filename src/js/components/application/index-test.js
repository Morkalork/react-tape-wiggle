import test from 'tape';
import Application from './index';
import {shallow} from 'enzyme';

test('Application shall render a header and a paragraph with information', (assert) => {
  const wrapper = shallow(Application());

  assert.equals(wrapper.find('h1').length, 1, 'A main heading is found');
  assert.equals(wrapper.find('p.description').length, 1, 'A descriptive paragraph is found');

  assert.end();
});