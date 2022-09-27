import React, { Component } from 'react';
// import { ReactDOM } from 'react-dom';

// import css from './Counter.module.css';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: this.props.initialValue,
  //   };
  // }

  state = {
    step: this.props.step,
    value: this.props.initialValue,
  };

  plusIncrement = () =>
    this.setState({ value: this.state.value + this.state.step });
  plusDecrement = () =>
    this.setState({ value: this.state.value - this.state.step });

  threeInrement = () => {
    // Запустим цикл и создадим 3 операции обновления
    for (let i = 0; i < 3; i += 1) {
      // Если посмотреть состояние, на всех итерациях будет 0
      // Потому что это синхронный код и обновление состояния еще не произошло
      console.log(this.state.value);

      this.setState(prevState => {
        console.log(prevState.value + 1);
        return { value: prevState.value + 1 };
      });
    }
  };

  threeDecrement = () => {
    // Запустим цикл и создадим 3 операции обновления
    for (let i = 0; i < 3; i += 1) {
      // Если посмотреть состояние, на всех итерациях будет 0
      // Потому что это синхронный код и обновление состояния еще не произошло
      console.log(this.state.value);

      this.setState(prevState => {
        console.log(prevState.value - 1);
        return { value: prevState.value - 1 };
      });
    }
  };

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // работает
    console.log('this.props: ', this.props);
  };

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // работает
    console.log('this.props: ', this.props);
  };

  render() {
    const { step } = this.props;
    // const { initialValue } = this.props;

    return (
      <div className="section">
        <button type="button" onClick={this.threeDecrement}>
          Decrement by {step}
        </button>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.threeInrement}>
          Increment by {step}
        </button>
      </div>
    );
  }
}

// ReactDOM.render(<Counter step={5} />, document.getElementById("root"));

export { Counter };
