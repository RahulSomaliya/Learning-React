export function NumberInput({ text, value, onValueChange }) {
  function handleOnChange(e) {
    onValueChange(Number(e.target.value));
  }

  return (
    <div>
      {text}
      <input type='number' value={value} onChange={handleOnChange} />
    </div>
  );
}
