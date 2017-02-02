import {Component} from 'react';
import {hh, div, h2, p} from 'react-hyperscript-helpers';
import {connect} from 'react-redux';
import Post from './post';

export class Posts extends Component {
  render() {
    return (
      div('.post-area', [
        h2('Available posts'),
        p('.tag-line', 'These are all the available posts:'),
        div('.posts', [
          this.props.posts.map((post) => Post({
            title: post.title,
            body: post.body
          }))
        ])
      ])
    );
  }
}

export default hh(connect((state) => {
  return {
    posts: state.posts
  };
})(Posts));