export const CalculatorBtn = ({ digit, setScreenValue, screenValue }) => {
  const handleClickBtn = (element) => {
    switch (element) {
      case "C":
        setScreenValue("");
        break;

      case "DEL":
        setScreenValue(screenValue.slice(0, -1));
        break;

      case "/":
      case "*":
      case "+":
      case "-":
        if (screenValue === "") return;
        if (screenValue.charAt(screenValue.length - 1).match(/[/*+-]/)) {
          setScreenValue(screenValue.slice(0, -1) + element);
        } else {
          setScreenValue(screenValue + element);
        }
        break;

      case ".":
        const elements = screenValue.split(/[/*+-]/);
        const lastElement = elements[elements.length - 1];

        if (screenValue.match(/^\d|^\./)) {
          if (lastElement.match(/\./)) {
            return;
          } else {
            setScreenValue(screenValue + element);
          }
        } else {
          setScreenValue("0" + element);
        }
        break;

      case "=":
        // eslint-disable-next-line
        setScreenValue(eval(screenValue));
        break;

      default:
        setScreenValue(screenValue + element);
    }
  };

  return (
    <button
      className="calculatorBox--skeleton-btn"
      onClick={() => {
        handleClickBtn(digit);
      }}
    >
      {digit}
    </button>
  );
};
