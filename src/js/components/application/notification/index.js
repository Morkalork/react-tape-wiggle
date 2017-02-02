import {Component} from 'react';
import {hh, div, p, h3} from 'react-hyperscript-helpers';
import {connect} from 'react-redux';
import {hideAllNotifications} from './actions';

/**
 * A component that renders a notification
 */
export class Notification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.showing) {
      return null;
    }

    const notificationAttributes = {
      className: this.props.type
    };

    const closeAttributes = {
      onClick: () => this.props.dispatch(hideAllNotifications())
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

export default hh(connect((state) => {
  return {
    showing: state.notification.type !== null,
    type: state.notification.type,
    title: state.notification.title,
    message: state.notification.message
  };
})(Notification));