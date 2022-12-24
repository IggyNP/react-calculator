export const CalculatorBtn = ({ digit, setScreenValue }) => {
  return (
    <button
      className="calculatorBox--skeleton-btn"
      onClick={() => {
        setScreenValue(digit);
      }}
    >
      {digit}
    </button>
  );
};
