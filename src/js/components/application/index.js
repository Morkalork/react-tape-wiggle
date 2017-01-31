import {Component} from 'react';
import {hh, div, h1, p, header} from 'react-hyperscript-helpers';
import PersonEditForm from './person-edit-form';

export class Application extends Component {
  render() {
    return (
      div('.wrapper', [
        // TODO: Refactor this into a component on its own
        header([
          h1('React Tape Wiggle'),
          p('.description', 'This is a demo')
        ]),
        PersonEditForm()
      ])
    );
  }
}

export default hh(Application);