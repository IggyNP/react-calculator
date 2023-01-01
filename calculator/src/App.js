import { CalculatorBox } from "./components/CalculatorBox";
import { Signature } from "./components/Signature";
import "./styles/appStyles.css";

function App() {
  return (
    <div className="mainComponent">
      <CalculatorBox></CalculatorBox>
      <Signature></Signature>
    </div>
  );
}

export default App;
