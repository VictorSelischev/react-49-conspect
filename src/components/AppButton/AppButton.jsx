import { Component } from "react";

// Button получает функцию changeMessage (имя пропа),
// которая вызывается при событии onClick
const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

class AppButton extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод который будем передавать в Button для вызова при клике
  updateMessage = evt => {
    console.log(evt); // Доступен объект события
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <div className="section">
        <span style={{display:"block"}}>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </div>
    );
  }
}

export { AppButton };