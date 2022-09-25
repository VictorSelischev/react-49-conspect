import { Counter } from './components/Counter/Counter';
import { MyClassComponent } from './components/MyClassComponent/MyClassComponent';

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
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e7ecf2',
      }}
    >
      <MyClassComponent />
      <button onClick={event => console.log(event)}>Click me!</button>
      <Counter step={5} />
    </div>
  );
};
