import {Component} from 'react';
import {hh, div, h2, p} from 'react-hyperscript-helpers';

export class Posts extends Component {
  render() {
    return (
      div('.posts', [
        h2('Available posts'),
        p('.tag-line', 'These are all the available posts:')
      ])
    );
  }
}

export default hh(Posts);