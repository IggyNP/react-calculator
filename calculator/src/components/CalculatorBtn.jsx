export const CalculatorBtn = ({
  digit,
  setScreenValue,
  screenValue,
  className = "calculatorBox--skeleton-btn",
}) => {
  const handleClickBtn = (element) => {
    const lastElement = screenValue.charAt(screenValue.length - 1);
	const elements = screenValue.split(/[/*+-]/);
	const last = elements[elements.length - 1];

    switch (element) {
      case "C":
        setScreenValue("");
        break;

      case "DEL":
        setScreenValue(screenValue.slice(0, -1));
        break;

		case "0":
			if (screenValue.charAt(0) === '0' && screenValue.charAt(1) !== '.')
				setScreenValue(screenValue);
			else
			setScreenValue(screenValue + element);
		break;

      case ".":
        if (screenValue.match(/^\d|^\./)) {
          last.match(/\./)
            ? setScreenValue(screenValue)
            : setScreenValue(screenValue + element);
		} else {
          setScreenValue("0" + element);
        }
        break;

      case "=":
        if (screenValue.length === 0) {
          return;
        }
        if (lastElement.match(/[/*+-.]/)) {
          return;
        }
        // eslint-disable-next-line
        setScreenValue(eval(screenValue).toString());
        break;

      default:
        if (screenValue.length === 0 && element.match(/[/*+-]/)) {
          return;
        }
        if (lastElement === "." && element.match(/[/*+-]/)) {
          return;
        }
        if (lastElement.match(/[/*+-]/) && element.match(/[\d]/)) {
          setScreenValue(screenValue + element);
        } else if (lastElement.match(/[/*+-]/) && element.match(/[/*+-]/)) {
          setScreenValue(screenValue.slice(0, -1) + element);
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
