export const CalculatorBtn = ({ digit, setScreenValue, screenValue,className="calculatorBox--skeleton-btn" }) => {
  const handleClickBtn = (element) => {
    switch (element) {
      case "C":
        setScreenValue("");
        break;

      case "DEL":
        setScreenValue(screenValue.slice(0, -1));
        break;

      // case "/":
      // case "*":
      // case "+":
      // case "-":
      //   if (screenValue === "") return;
      //   if (screenValue.charAt(screenValue.length - 1).match(/[/*+-]/)) {
      //     setScreenValue(screenValue.slice(0, -1) + element);
      //   } 
		  //   else setScreenValue(screenValue + element);
      //   break;

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
		// if (screenValue.charAt(screenValue.length - 1).match(/[/*+-]/))
		// 	return;
        // eslint-disable-next-line
        setScreenValue(eval(screenValue).toString());
        break;

        default: 
        
        if(element.match(/[/*+-]/)){
          screenValue.charAt(screenValue.length - 1).match(/[/*+-]/) && setScreenValue(screenValue.slice(0, -1) + element);
          /* NUEVO DESARROLLO. Al poner el && estamos diciendo que si la primera condicion es true se hace el set, si es false no llega a ejecutar el set */
        }else{
          setScreenValue(screenValue + element);
        }

        /*  ESTO SERIA LO VIEJO PERO SOLUCIONADO LO DE VARIOS SIGNOS */
          // if (screenValue === "" && element.match(/[/*+-]/)) return;
          // if (screenValue.charAt(screenValue.length - 1).match(/[/*+-]/) && element.match(/[/*+-]/)) {
          //   setScreenValue(screenValue.slice(0, -1) + element);
          // }else setScreenValue(screenValue + element);
    }
  };

  return (
    <button
    className={className}
      // className={
      //   digit === "DEL" || digit === "="
      //     ? "calculatorBox--skeleton-btn double-width"
      //     : "calculatorBox--skeleton-btn"
      // }
      onClick={() => {
        handleClickBtn(digit);
      }}
    >
      {digit}
    </button>
  );
};
