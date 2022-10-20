import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modul.module.css';

const modalRoot = document.querySelector('#root__modul');

class Modul extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <div className={css.modul__backdrop} onClick={this.handleBackdropClick}>
        <div className={css.modul__window}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export { Modul };
