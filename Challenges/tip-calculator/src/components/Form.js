import { NumberInput } from './NumberInput';
import { SelectorInput } from './SelectorInput';

export default function Form({
  billAmount,
  setBillAmount,
  personOneTip,
  setPersonOneTip,
  personTwoTip,
  setPersonTwoTip
}) {
  const tipOptions = [
    { text: `Didn't like the service (0%)`, value: 0 },
    { text: `It was okaish (5%)`, value: 5 },
    { text: `I liked the service! (10%)`, value: 10 },
    { text: `I loved the service! (20%)`, value: 20 },
  ];

  return (
    <>
      <NumberInput
        text='How much was the bill'
        value={billAmount}
        onValueChange={setBillAmount}
      />

      <SelectorInput
        text='How did you like the service?'
        value={personOneTip}
        options={tipOptions}
        onChange={setPersonOneTip}
      />

      <SelectorInput
        text='How did your friend like the service?'
        value={personTwoTip}
        options={tipOptions}
        onChange={setPersonTwoTip}
      />
    </>
  );
}
