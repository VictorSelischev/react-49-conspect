import { Component } from 'react';
import css from './SignUpForm.module.css';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  // Отвечает за обновление состояния
  // Для всех инпутов создаем один обарботчик
  // Различать инпуты будем по атрибуту name
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  // Вызывается при отправке формы
  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form className="section" onSubmit={this.handleSubmit}>
        <label className={css.text} style={{ marginRight: '20px' }}>
          Name
          <input
            style={{ marginLeft: '10px' }}
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

export { SignUpForm };
