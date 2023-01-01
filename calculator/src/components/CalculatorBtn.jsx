export const CalculatorBtn = ({
  digit,
  setScreenValue,
  screenValue,
  className = "calculatorBox--skeleton-btn",
}) => {
  const handleClickBtn = (element) => {
    switch (element) {
      case "C":
        setScreenValue("");
        break;

      case "DEL":
        setScreenValue(screenValue.slice(0, -1));
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
        if (screenValue.charAt(screenValue.length - 1).match(/[/*+-]/)) return;
        // eslint-disable-next-line
        setScreenValue(eval(screenValue).toString());
        break;

      default:
        if (element.match(/[/*+-]/)) {
          screenValue.charAt(screenValue.length - 1).match(/[/*+-]/)
            ? setScreenValue(screenValue.slice(0, -1) + element)
            : setScreenValue(screenValue + element);
        } else {
          setScreenValue(screenValue + element);
        }
    }
  };

  return (
    <button
      className={className}
      onClick={() => {
        handleClickBtn(digit);
      }}
    >
      {digit}
    </button>
  );
};
