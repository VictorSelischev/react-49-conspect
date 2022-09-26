import { Counter } from './components/Counter/Counter';
import { MyClassComponent } from './components/MyClassComponent/MyClassComponent';
import Focus from './components/Focus/Focus';
import Blur from './components/Blur/Blur';
import FocusBlur from './components/FocusBlur/FocusBlur';
import { Toggle } from './components/Toggle/Toggle';

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
        backgroundColor: '#5B84B1FF',
      }}
    >
      <MyClassComponent />
      <button onClick={event => console.log(event)}>Click me!</button>
      <Counter step={1} initialValue={0} />
      <Focus />
      <Blur />
      <FocusBlur />
      <Toggle>`&lt;Toggle&gt;Этот компонент работает&lt;/Toggle&gt;`</Toggle>
    </div>
  );
};
