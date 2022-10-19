import { Component } from 'react';
import css from './Modul.module.css';

class Modul extends Component {
    render() {
        return (
            <div className={css.modul__backdrop}>
                <div className={css.modul__window}>{ this.props.children }</div>
            </div>
        );
    }
}

export { Modul };