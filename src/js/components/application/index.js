import {Component} from 'react';
import {hh, div, h1, p, header, button} from 'react-hyperscript-helpers';
import Posts from './posts';
import Notification from './notification';
import {refreshPosts} from './posts/actions';
import {connect} from 'react-redux';

/**
 * This is the application component, the base component which renders all other components
 */
export class Application extends Component {
  render() {
    return (
      div('.wrapper', [
        header([
          h1('React Tape Wiggle'),
          p('.description', 'This is a demo')
        ]),
        Notification(),
        p('.load-posts-area', [
          button('.load-posts', {
            onClick: () => this.props.dispatch(refreshPosts())
          }, 'Load posts')
        ]),
        Posts()
      ])
    );
  }
}

export default hh(connect()(Application));