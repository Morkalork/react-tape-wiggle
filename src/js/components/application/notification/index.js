import {Component, PropTypes} from 'react';
import {hh, div, p, h3} from 'react-hyperscript-helpers';

/**
 * A component that renders a notification
 */
export class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: true
    };
  }

  render() {
    if (!this.state.showing) {
      return null;
    }

    const notificationAttributes = {
      className: this.props.type
    };

    const closeAttributes = {
      onClick: () => this.setState({showing: false})
    };

    return (
      div('.notification', notificationAttributes, [
        p('.close.fa.fa-times', closeAttributes),
        this.props.title ? h3(this.props.title) : null,
        p('.message', this.props.message)
      ])
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string
};

export default hh(Notification);