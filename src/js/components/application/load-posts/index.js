import {Component} from 'react';
import {hh, div, p, button} from 'react-hyperscript-helpers';
import {connect} from 'react-redux';
import {refreshPosts} from '../posts/actions';

export class LoadPosts extends Component {
  render() {
    return (
      div('.load-posts-area', [
        p([
          button({
            onClick: () => this.props.dispatch(refreshPosts())
          },
          'load posts')
        ])
      ])
    );
  }
}

export default hh(connect()(LoadPosts));