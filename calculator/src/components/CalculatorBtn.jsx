export const CalculatorBtn = ({ digit, setScreenValue, screenValue }) => {

	const handleClickBtn = (element) => {
		switch(element){
			case "C":
				setScreenValue('')
				break;
			case "DEL":
				setScreenValue(screenValue.slice(0, -1))
				break;
			case "=":
				// eslint-disable-next-line
				setScreenValue(eval(screenValue))
				break;
			default:
				setScreenValue(screenValue + element)
		}
	}
  return (
    <button
      className="calculatorBox--skeleton-btn"
      onClick={() => {
       handleClickBtn(digit)
      }}
    >
      {digit}
    </button>
  );
};
