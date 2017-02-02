import {Component} from 'react';
import {hh, header, h1, p} from 'react-hyperscript-helpers';

export class ApplicationHeader extends Component {
  render() {
    return (
      header([
        h1('Hello'),
        p('This is a test')
      ])
    );
  }
}

export default hh(ApplicationHeader);
