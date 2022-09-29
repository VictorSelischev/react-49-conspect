import { Component } from 'react';

class NameForm extends Component {
  state = {
    input: '',
    textarea: 'Please write an essay about your favorite DOM element.',
  };

  handleChange = event => {
    console.log(event); // событие
    console.log(event.target); // элемент, на котором было событие
    console.log(event.target.value); // значение элемента, на котором было событие
    console.log(event.target.localName); // локальное (собственное) имя элемента, на котором было событие
    const { localName, value } = event.target;
    this.setState({ [localName]: value });
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
        <label
          style={{ fontSize: '15px', marginLeft: '30px', marginBottom: '10px' }}
        >
          Essay:
          <textarea
            style={{ marginLeft: '10px' }}
            value={this.state.textarea}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { NameForm };
