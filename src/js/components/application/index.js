import {Component} from 'react';
import {hh, div, h1, p} from 'react-hyperscript-helpers';

export class Application extends Component {
  render() {
    return (
      div('.wrapper', [
        h1('React Tape Wiggle'),
        p('.description', 'This is a demo')
      ])
    );
  }
}

export default hh(Application);