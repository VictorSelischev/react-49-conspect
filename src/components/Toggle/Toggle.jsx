import { Component } from 'react';
import css from './Toggle.module.css';

class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true }, () => console.log(this.state));

  hide = () => this.setState({ isOpen: false }, () => console.log(this.state));

  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    console.log(children);

    return (
      <div className={css.center}>
        <div>
          <button onClick={this.show}>Show</button>
          <button onClick={this.hide}>Hide</button>
        </div>
        <div className={css.text}>{isOpen && <p >{children}</p>}</div>
        <button onClick={this.toggle}>Show|Hide</button>
      </div>
    );
  }
}

export { Toggle };
