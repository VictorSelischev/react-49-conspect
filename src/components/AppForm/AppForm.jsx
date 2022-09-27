import { Component } from 'react';

class AppForm extends Component {
  state = {
    inputValue: '',
  };

  handleChange = evt => {
    console.log(evt);
    console.log(evt.target);
    console.log(evt.target.value);
    this.setState({ inputValue: evt.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="section">
        <input type="text" value={inputValue} onChange={this.handleChange} />
      </div>
    );
  }
}

export { AppForm };
