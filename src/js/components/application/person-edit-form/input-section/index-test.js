import test from 'tape';
import {shallow} from 'enzyme';
import InputSection from './index';

test('InputSection should render two paragraphs with a label and an input', (assert) => {
  const wrapper = shallow(InputSection({id: '1'}));

  assert.equals(wrapper.find('p').length, 2, 'Two paragraphs were found');
  assert.equals(wrapper.find('label').length, 1, 'One label was found');
  assert.equals(wrapper.find('input').length, 1, 'On input was found');
  assert.end();
});

test('InputSection should handle ID-attributes correctly', (assert) => {
  const id = '1';
  const wrapper = shallow(InputSection({id}));

  assert.equals(wrapper.find('label').prop('id'), id, 'Label received the correct ID');
  assert.equals(wrapper.find('input').prop('id'), id, 'Input received the correct ID');
  assert.end();
});