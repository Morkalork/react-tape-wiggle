import test from 'tape';
import {Application} from './index';
import {shallow} from 'enzyme';
import {hh} from 'react-hyperscript-helpers';

const setup = () => {
  return hh(Application);
};

test('Application shall render a header and a paragraph with information', (assert) => {
  const ApplicationHelper = setup();
  const wrapper = shallow(ApplicationHelper());
  console.log(wrapper);

  // assert.equals(wrapper.find('h').length, 1, 'A main heading is found');
  // assert.equals(wrapper.find('p.description').length, 1, 'A descriptive paragraph is found');

  assert.end();
});
