import { Component } from 'react';

class NameForm extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '250px',
          border: '2px solid white',
          borderRadius: '8px',
          padding: '40px',
          marginTop: '60px',
        }}
      >
        <label style={{ fontSize: '15px' }}>
          Name:
          <input
            onChange={this.handleChange}
            value={this.state.value}
            style={{ marginLeft: '30px', marginBottom: '10px' }}
            type="text"
            name="name"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { NameForm };
