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
      {/* <StepMessage step={1}>
        <p>Pass in content </p>
        <p>🚀</p>
      </StepMessage>

      <StepMessage step={2}>
        <p>Pass new content </p>
        <p>🌴</p>
      </StepMessage> */}
      {/* <Steps /> */}
    </div>
  );
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

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className='buttons'>
              <Button
                bgColor='#e7e7e7'
                textColor='#333'
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className='buttons'>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}>
              <span>👈🏻</span>Previous
            </Button>

            <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>
              Next<span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ children, textColor, bgColor, onClick }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
