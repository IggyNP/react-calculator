import { useState } from "react";
import "../styles/CalculatorBoxStyles.css";
import { CalculatorBtn } from "./CalculatorBtn";
import { CalculatorScreen } from "./CalculatorScreen";

export const CalculatorBox = () => {

	const [screenValue, setScreenValue] = useState(0);

	return (<div className="calculatorBox--skeleton">
		<CalculatorScreen screenValue = {screenValue}></CalculatorScreen>
		<CalculatorBtn digit = {7} setScreenValue = {setScreenValue}> </CalculatorBtn>
		<CalculatorBtn> digit = {7} setScreenValue = {setScreenValue} </CalculatorBtn>
		<CalculatorBtn> digit = {7} setScreenValue = {setScreenValue} </CalculatorBtn>
		<CalculatorBtn> digit = {7} setScreenValue = {setScreenValue} </CalculatorBtn>
		</div>);
}