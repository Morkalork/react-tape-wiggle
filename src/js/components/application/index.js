import {Component} from 'react';
import {hh, div, p, button} from 'react-hyperscript-helpers';
import Posts from './posts';
import Notification from './notification';
import {refreshPosts} from './posts/actions';
import {connect} from 'react-redux';
import ApplicationHeader from './application-header';

/**
 * This is the application component, the base component which renders all other components
 */
export class Application extends Component {
  render() {
    return (
      div('.wrapper', [
        ApplicationHeader(),
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
