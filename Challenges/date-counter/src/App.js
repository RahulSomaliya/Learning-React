import { useState } from 'react';
import './App.css';

function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);

  const increaseStep = () => setStep(s => s + 1);
  const decStep = () => setStep(s => s - 1);

  const increaseCounter = () => setCounter(c => c + step);
  const decCounter = () => setCounter(c => c - step);

  let date = new Date();
  date.setDate(date.getDate() + counter);

  return (
    <>
      <div>
        <button onClick={decStep}>-</button>
        Step: {step}
        <button onClick={increaseStep}>+</button>
      </div>

      <div>
        <button onClick={decCounter}>-</button>
        Count: {counter}
        <button onClick={increaseCounter}>+</button>
      </div>

      <div>
        {`${Math.abs(counter)} days ${
          counter >= 0 ? 'from today is' : `ago was`
        } ${date.toDateString()}`}
      </div>
    </>
  );
}

export default App;
