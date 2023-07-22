export function SelectorInput({ text, value, onChange, options }) {
  function handleOnChange(e) {
    onChange(Number(e.target.value));
  }

  return (
    <div>
      {text}
      <select value={value} onChange={handleOnChange}>
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
