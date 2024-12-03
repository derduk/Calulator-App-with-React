import { useState } from "react";
import { evaluate } from "mathjs"; // Import evaluate from math.js
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const handleDigitClick = (digit) => {
    if (display === "0") {
      setDisplay(digit);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperatorClick = (operator) => {
    setDisplay(display + "" + operator + "");
  };

  const handleClearClick = () => {
    setDisplay("0");
  };

  const handleEqualClick = () => {
    try {
      const result = evaluate(display); // Use math.js to evaluate
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="container">
      <div className="display-container">{display}</div>
      <div className="digits">
        <div className="row one">
          <div className="box" onClick={() => handleDigitClick("7")}>7</div>
          <div className="box" onClick={() => handleDigitClick("8")}>8</div>
          <div className="box" onClick={() => handleDigitClick("9")}>9</div>
          <div className="box" onClick={() => handleOperatorClick("/")}>/</div>
        </div>
        <div className="row two">
          <div className="box" onClick={() => handleDigitClick("4")}>4</div>
          <div className="box" onClick={() => handleDigitClick("5")}>5</div>
          <div className="box" onClick={() => handleDigitClick("6")}>6</div>
          <div className="box" onClick={() => handleOperatorClick("*")}>*</div>
        </div>
        <div className="row three">
          <div className="box" onClick={() => handleDigitClick("1")}>1</div>
          <div className="box" onClick={() => handleDigitClick("2")}>2</div>
          <div className="box" onClick={() => handleDigitClick("3")}>3</div>
          <div className="box" onClick={() => handleOperatorClick("+")}>+</div>
        </div>
        <div className="row four">
          <div className="box" onClick={() => handleDigitClick("0")}>0</div>
          <div className="box" onClick={() => handleDigitClick(".")}>.</div>
          <div className="box" onClick={handleEqualClick}>=</div>
          <div className="box" onClick={() => handleOperatorClick("-")}>-</div>
        </div>
        <div className="row five">
          <div className="box clear" onClick={handleClearClick}>
            Clear
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
