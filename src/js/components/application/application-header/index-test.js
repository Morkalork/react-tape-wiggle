import test from 'tape';
import {shallow} from 'enzyme';
import {hh} from 'react-hyperscript-helpers';
import {ApplicationHeader} from './index';

const setup = () => {
  return hh(ApplicationHeader);
}

test('ApplicationHeader should render correctly', (assert) => {
  const applicationHeaderHelper = setup();
  const wrapper = shallow(applicationHeaderHelper);
  assert.equals(wrapper.find('header').lenght, 1, 'applicationHeader has a header element');
  assert.equals(wrapper.find('h1').lenght, 1, 'applicationHeader has a h1 element');
  assert.equals(wrapper.find('header').find('p').lenght, 1, 'applicationHeader has a p element');
  assert.end();
});