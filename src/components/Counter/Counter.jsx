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
    value: this.props.initialValue,
  };

  plusIncrement = () => this.setState({ value: this.state.value + 1 });
  plusDecrement = () => this.setState({ value: this.state.value - 1 });

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
        <button type="button" onClick={this.plusDecrement}>
          Decrement by {step}
        </button>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.plusIncrement}>
          Increment by {step}
        </button>
      </div>
    );
  }
}

// ReactDOM.render(<Counter step={5} />, document.getElementById("root"));

export { Counter };
