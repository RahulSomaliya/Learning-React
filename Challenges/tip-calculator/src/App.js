import { useState } from 'react';
import Form from './components/Form';
import BillOutput from './components/BillOutput';
import ResetButton from './components/ResetButton';

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [personOneTip, setPersonOneTip] = useState(0);
  const [personTwoTip, setPersonTwoTip] = useState(0);

  const tipPercent = (personOneTip + personTwoTip) / 2;

  function handleReset() {
    setBillAmount(0);
    setPersonOneTip(0);
    setPersonTwoTip(0);
  }

  return (
    <>
      <Form
        billAmount={billAmount}
        setBillAmount={setBillAmount}
        personOneTip={personOneTip}
        setPersonOneTip={setPersonOneTip}
        personTwoTip={personTwoTip}
        setPersonTwoTip={setPersonTwoTip}
      />

      <BillOutput billAmount={billAmount} tipPercent={tipPercent} />

      <ResetButton onClick={handleReset} />
    </>
  );
}
