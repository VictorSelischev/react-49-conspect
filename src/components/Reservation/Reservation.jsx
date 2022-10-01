import React from 'react';

class Reservation extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isGoing: true,
  //       numberOfGuests: 2,
  //       };

  //     this.handleInputChange = this.handleInputChange.bind(this);
  //   }

  state = {
    isGoing: true,
    numberOfGuests: 2,
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(target);
    console.log(value);
    console.log(name);

    this.setState({
      [name]: value,
    });
  };

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
        <label style={{ fontSize: '14px' }}>
          Пойдут:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        {/* <br /> */}
        <label style={{ fontSize: '14px' }}>
          Количество гостей:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default Reservation;
