import {Component} from 'react';
import {hh, div, p, h3} from 'react-hyperscript-helpers';
import {connect} from 'react-redux';

/**
 * A component that renders a notification
 */
export class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: this.props.showing
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

export default hh(connect((state) => {
  console.log({state});

  return {
    showing: state.notification.type !== null,
    type: state.notification.type,
    title: state.notification.title,
    message: state.notification.message
  };
})(Notification));