import { useEffect, useState } from 'react';

//

export default function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedRate, setConvertedRate] = useState('');

  useEffect(
    function () {
      const controller = new AbortController();

      async function calculateConversion() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal }
          );

          const { rates } = await res.json();

          setConvertedRate(rates?.[toCurrency] || amount);
        } catch (error) {
          if (error === 'AbortError') {
            console.log('abort is working!!!');
          }
        }
      }

      calculateConversion();
      return function () {
        controller.abort();
      };
    },
    [amount, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type='number'
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
      />

      <CurrencySelector value={fromCurrency} updateCurrency={setFromCurrency} />

      <CurrencySelector value={toCurrency} updateCurrency={setToCurrency} />

      <p>{convertedRate}</p>
    </div>
  );
}

function CurrencySelector({ value, updateCurrency }) {
  return (
    <select value={value} onChange={e => updateCurrency(e.target.value)}>
      <option value='USD'>USD</option>
      <option value='EUR'>EUR</option>
      <option value='CAD'>CAD</option>
      <option value='INR'>INR</option>
    </select>
  );
}
