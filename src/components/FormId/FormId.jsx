// Можно использовать любой пакет для генерации уникальных строк
import { nanoid } from "nanoid";
import { Component } from 'react';

class FormId extends Component {
  loginInputId = nanoid();

  render() {
    return (
      <form className="section">
        <label htmlFor={this.loginInputId} style={{fontSize: "12px", paddingRight: "20px"}}>Login</label>
        <input type="text" name="login" id={this.loginInputId} />
      </form>
    );
  }
}

export { FormId };