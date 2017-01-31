import {Component} from 'react';
import {hh, div, button} from 'react-hyperscript-helpers';
import {connect} from 'react-redux';
import InputSection from './input-section';

export class PersonEditForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: this.props.name,
      age: this.props.age
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onAccept = this.onAccept.bind(this);
  }

  onNameChange(e) {
    // We probably should valid the name
    this.setState({name: e.target.value});
  }

  onAgeChange(e) {
    // We probably should validate the age
    this.setState({age: e.target.value});
  }

  onAccept() {
    alert(`Hello ${this.state.name}, you are ${this.state.age} years old!`);
  }

  render() {
    return (
      div('.person-edit-form', [
        InputSection({
          id: 'user-name',
          value: this.state.name,
          label: 'Your name',
          onChange: this.onNameChange
        }),
        InputSection({
          id: 'user-age',
          value: this.state.age.toString(),
          label: 'Your age',
          onChange: this.onAgeChange
        }),
        div('.actions', [
          button('.accept', {
            onClick: this.onAccept
          }, 'Accept')
        ])
      ])
    );
  }
}

export default hh(connect((state) => {
  return {
    name: state.name,
    age: state.age
  };
})(PersonEditForm));
