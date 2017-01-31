import {Component, PropTypes} from 'react';
import {hh, div, p, label, input} from 'react-hyperscript-helpers';

export class InputSection extends Component {

  render() {
    return (
      div('.input-section', [
        p('.title', [
          label({id: this.props.id}, this.props.label)
        ]),
        p('.input', [
          input({
            id: this.props.id,
            value: this.props.value,
            placeholder: this.props.placeholder,
            onChange: this.props.onChange
          })
        ])
      ])
    );
  }
}

InputSection.propTypes = {
  // Values
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,

  // Events
  onChange: PropTypes.func
};

export default hh(InputSection);