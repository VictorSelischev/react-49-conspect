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
      <form className="section" style={{display: 'flex', flexDirection: 'column', width: '250px'}} onSubmit={this.handleSubmit}>
        <label className={css.text} style={{ marginBottom: '20px' }}>
          Name
          <input
            style={{ marginLeft: '40px' }}
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.text} style={{ marginBottom: '20px' }}>
          Email
          <input
            style={{ marginLeft: '43px' }}
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.text} style={{ marginBottom: '20px' }}>
          Password
          <input
            style={{ marginLeft: '22px' }}
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

export { SignUpForm };
