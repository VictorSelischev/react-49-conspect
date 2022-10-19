import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modul.module.css';

const modalRoot = document.querySelector('#root__modul');

class Modul extends Component {
  render() {
    return createPortal(
      <div className={css.modul__backdrop}>
        <div className={css.modul__window}>{this.props.children}</div>
      </div>, modalRoot
    );
  }
}

export { Modul };
