import createStore from './store';
import Application from './js/components/application';
import {createElement} from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

const initialState = {
  name: '',
  age: 0
};

const store = createStore(initialState);
const rootElement = createElement(Provider, {store}, createElement(Application));
render(rootElement, document.getElementById('app'));
