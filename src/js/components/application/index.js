import {Component} from 'react';
import {hh, div, h1, p, header} from 'react-hyperscript-helpers';
import Posts from './posts';
import Notification from './notification';

export class Application extends Component {
  render() {
    return (
      div('.wrapper', [
        // TODO: Refactor this into a component on its own
        header([
          h1('React Tape Wiggle'),
          p('.description', 'This is a demo')
        ]),
        Notification(),
        Posts()
      ])
    );
  }
}

export default hh(Application);