import React, { Component } from 'react';

class SelectedCharacter extends Component {
  componentDidMount() {
    this.props.getSelectedCharacter(this.props.match.params.id);
  }
  render() {
    return <div>Yup!</div>;
  }
}

export default SelectedCharacter;
