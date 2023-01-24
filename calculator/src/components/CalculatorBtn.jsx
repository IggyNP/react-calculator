export const CalculatorBtn = ({
  digit,
  setScreenValue,
  screenValue,
  className = "calculatorBox--skeleton-btn",
}) => {
  const handleClickBtn = (element) => {
	const lastElement = screenValue.charAt(screenValue.length - 1);
	
    switch (element) {
      case "C":
        setScreenValue("");
        break;

      case "DEL":
        setScreenValue(screenValue.slice(0, -1));
        break;

      case ".":
        const elements = screenValue.split(/[/*+-]/);

        if (screenValue.match(/^\d|^\./)) {
          elements[elements.length - 1].match(/\./)
          	? setScreenValue(screenValue)
          	: setScreenValue(screenValue + element);
        } else {
          setScreenValue("0" + element);
        }
        break;

      case "=":
        if (lastElement.match(/[/*+-.]/)) return;
        // eslint-disable-next-line
        setScreenValue(eval(screenValue).toString());
        break;

		default:
			if (lastElement === '.' && element.match(/[/*+-]/)) {
			  return;
			}
			if (lastElement.match(/[/*+-]/) && element.match(/[\d]/)) {
			  setScreenValue(screenValue + element);
			} else if(lastElement.match(/[/*+-]/) && element.match(/[/*+-]/)){
			  setScreenValue(screenValue.slice(0, -1) + element);
			}else {
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
