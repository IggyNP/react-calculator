import { useState } from "react";
import "../styles/CalculatorBoxStyles.css";
import { CalculatorBtn } from "./CalculatorBtn";
import { CalculatorScreen } from "./CalculatorScreen";

export const CalculatorBox = () => {
  const [screenValue, setScreenValue] = useState("");
  const digits = [
    ["C", "DEL", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <div className="calculatorBox--skeleton">
      <CalculatorScreen screenValue={screenValue}></CalculatorScreen>
      {digits.map((row, rowIndex) => (
        <div className={`row.${rowIndex}`} key={rowIndex}>
          {row.map((digit, digitIndex) => (
            <CalculatorBtn
              key={digitIndex}
              digit={digit}
              setScreenValue={setScreenValue}
              screenValue={screenValue}
              className={`calculatorBox--skeleton-btn ${
                digit === "0" || digit === "DEL" ? "double-width" : ""
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
