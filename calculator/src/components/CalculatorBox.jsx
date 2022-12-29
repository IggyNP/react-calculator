import { useState } from "react";
import "../styles/CalculatorBoxStyles.css";
import { CalculatorBtn } from "./CalculatorBtn";
import { CalculatorScreen } from "./CalculatorScreen";

export const CalculatorBox = () => {
  const [screenValue, setScreenValue] = useState("");

  return (
    <div className="calculatorBox--skeleton">
      <CalculatorScreen screenValue={screenValue}></CalculatorScreen>
      <div className="row.1">
        <CalculatorBtn digit={"C"} setScreenValue={setScreenValue} screenValue={screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"DEL"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"%"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"/"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
      </div>
	  <div className="row.2">
        <CalculatorBtn digit={"7"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"8"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"9"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"*"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
      </div>
	  <div className="row.3">
        <CalculatorBtn digit={"4"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"5"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"6"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"-"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
      </div>
	  <div className="row.4">
        <CalculatorBtn digit={"1"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"2"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"3"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"+"} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
      </div>
	  <div className="row.0">
        <CalculatorBtn digit={"0"} setScreenValue={setScreenValue} screenValue = {screenValue}> 
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"."} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
        <CalculatorBtn digit={"="} setScreenValue={setScreenValue} screenValue = {screenValue}>
          {" "}
        </CalculatorBtn>
      </div>
    </div>
  );
};