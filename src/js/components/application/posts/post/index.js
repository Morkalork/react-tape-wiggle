import {Component, PropTypes} from 'react';
import {hh, div, p} from 'react-hyperscript-helpers';

export class Post extends Component {
  render() {
    return (
      div('.post', [
        p('.title', this.props.title),
        p('.body', this.props.body)
      ])
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default hh(Post);