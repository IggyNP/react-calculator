import "../styles/CalculatorBoxStyles.css";
import { CalculatorBtn } from "./CalculatorBtn";
import { CalculatorScreen } from "./CalculatorScreen";

export const CalculatorBox = () => {

	return (<div className="calculatorBox--skeleton">
		<CalculatorScreen></CalculatorScreen>
		<CalculatorBtn></CalculatorBtn>
		</div>);
}