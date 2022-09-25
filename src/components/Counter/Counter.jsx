import React, { Component } from 'react';
// import { ReactDOM } from 'react-dom';

import css from './Counter.module.css';

class Counter extends Component {

  static defaultProps = {
    step: 1,
  };

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // работает
    console.log('this.props: ', this.props);
  }

  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // работает
    console.log('this.props: ', this.props);
  }

  render() {
    const { step } = this.props;

    return (
      <div className={css.section}>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

// ReactDOM.render(<Counter step={5} />, document.getElementById("root"));

export { Counter };
