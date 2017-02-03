import test from 'tape';
import {shallow} from 'enzyme';
import {hh} from 'react-hyperscript-helpers';
import {LoadPosts} from './index';
import sinon from 'sinon';

const setup = () => {
  return hh(LoadPosts);
};

test('LoadPosts should render correctly', (assert) => {
  const loadPostsHelper = setup();
  const wrapper = shallow(loadPostsHelper());
  const loadPostsArea = wrapper.find('div.load-posts-area');
  assert.equals(loadPostsArea.length, 1, 'loadPostsArea has the div element');

  const paragraph = loadPostsArea.find('p');
  assert.equals(paragraph.length, 1, 'The div has a paragraph element');

  assert.equals(paragraph.find('button').length, 1, 'The paragraph has a button');
  assert.end();
});

test('LoadPosts should refresh posts on button click', (assert) => {
  const loadPostsHelper = setup();
  const dispatchStub = sinon.stub();
  const wrapper = shallow(loadPostsHelper({dispatch: dispatchStub}));
  wrapper.find('button').simulate('click');
  assert.equals(dispatchStub.callCount, 1, 'Click called once');
  assert.end();
});