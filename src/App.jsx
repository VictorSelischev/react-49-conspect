import { Counter } from './components/Counter/Counter';
import { MyClassComponent } from './components/MyClassComponent/MyClassComponent';
import Focus from './components/Focus/Focus';
import Blur from './components/Blur/Blur';
import FocusBlur from './components/FocusBlur/FocusBlur';
import { Toggle } from './components/Toggle/Toggle';
import { AppButton } from './components/AppButton/AppButton';
import { LoginForm } from './components/LoginForm/LoginForm';
import { AppForm } from './components/AppForm/AppForm';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import { FormId } from './components/FormId/FormId';
import { NameForm } from './components/NameForm/NameForm';
import Reservation from './components/Reservation/Reservation';
import HelloMessage from './components/HelloMessage/HelloMessage';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        paddingTop: 88,
        paddingBottom: 88,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        backgroundColor: '#00FA9A',
      }}
    >
      <HelloMessage name="Виктор" />
      <MyClassComponent />
      <button onClick={event => console.log(event)}>Click me!</button>
      <Counter step={1} initialValue={0} />
      <Focus />
      <Blur />
      <FocusBlur />
      <Toggle>`&lt;Toggle&gt;Этот компонент работает&lt;/Toggle&gt;`</Toggle>
      <AppButton />
      <LoginForm onSubmit={values => console.log(values)} />
      <AppForm />
      <SignUpForm onSubmit={values => console.log(values)} />
      <FormId />
      <NameForm />
      <Reservation />
    </div>
  );
};
