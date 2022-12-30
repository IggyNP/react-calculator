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
        } 
		else setScreenValue(screenValue + element);
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
		if (screenValue.charAt(screenValue.length - 1).match(/[/*+-]/))
			return;
        // eslint-disable-next-line
        else setScreenValue(eval(screenValue));
        break;

      default:
        setScreenValue(screenValue + element);
    }
  };

  return (
    <button
      className={
        digit === "DEL" || digit === "="
          ? "calculatorBox--skeleton-btn double-width"
          : "calculatorBox--skeleton-btn"
      }
      onClick={() => {
        handleClickBtn(digit);
      }}
    >
      {digit}
    </button>
  );
};
