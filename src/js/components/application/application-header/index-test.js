import test from 'tape';
import {shallow} from 'enzyme';
import {hh} from 'react-hyperscript-helpers';
import {ApplicationHeader} from './index';

const setup = () => {
  return hh(ApplicationHeader);
};

test.only('ApplicationHeader should render correctly', (assert) => {
  const applicationHeaderHelper = setup();
  const wrapper = shallow(applicationHeaderHelper());
  assert.equals(wrapper.find('header').length, 1, 'applicationHeader has a header element');
  assert.equals(wrapper.find('h1').length, 1, 'applicationHeader has a h1 element');
  assert.equals(wrapper.find('header').find('p').length, 1, 'applicationHeader has a p element');
  assert.end();
});
