import { Component } from 'react';

class NameForm extends Component {
  state = {
    input: '',
    textarea: 'Привет! Тут просто немного текста внутри тега textarea',
    select: 'coconut',
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
            value={this.state.input}
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
            rows={3}
            style={{ marginLeft: '10px' }}
            value={this.state.textarea}
            onChange={this.handleChange}
          />
        </label>
        <select
          
          style={{ marginBottom: '10px' }}
          value={this.state.select}
          onChange={this.handleChange}
        >
          <option value="grapefruit">Грейпфрут</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { NameForm };
