import { Component } from 'react';
import css from './SignUpForm.module.css';

// Используем Enumerable чтобы не болеть антипаттерном "магические строки"
const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  // Отвечает за обновление состояния
  // Для всех инпутов создаем один обарботчик
  // Различать инпуты будем по атрибуту name
  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  // Вызывается при отправке формы
  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender } = this.state;

    return (
      <form
        className="section"
        style={{ display: 'flex', flexDirection: 'column', width: '250px' }}
        onSubmit={this.handleSubmit}
      >
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
        <section >
          <h2 style={{fontSize: '20px', lineHeight: '1.2'}}>Choose your gender</h2>
          <label style={{fontSize: '10px', marginRight: '60px'}}>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label style={{fontSize: '10px'}}>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label style={{ fontSize: '12px', marginBottom: '20px', marginTop: '20px' }}>
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          />
          Agree to terms
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export { SignUpForm };
