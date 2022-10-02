import React, { Component } from 'react';

class HelloMessage extends Component {
  render() {
    return (<div>Привет, {this.props.name}</div>);
    // return React.createElement('div', null, 'Привет, ', this.props.name);
  }
}

// root.render(<HelloMessage name="Саша" />);

export default HelloMessage;
