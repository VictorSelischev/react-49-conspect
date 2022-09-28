import { Component } from 'react';

class FormReact extends Component {
  state = {};

  render() {
    return (
      <form
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
          <input style={{marginLeft: "30px", marginBottom: '10px'}} type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { FormReact };
