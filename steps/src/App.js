import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
 return (
  <div>
    <Steps />
    {/* <Steps /> */}
  </div>
 )
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep(curStep => curStep - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep(s => s + 1);
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen(isOpen => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            {messages.map((_, i) => (
              <div className={step >= i + 1 ? 'active' : ''} key={i + 1}>
                {i + 1}
              </div>
            ))}
          </div>

          <p className='message'>
            Step {step}: {messages[step - 1]}
          </p>

          <div className='buttons'>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
