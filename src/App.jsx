import { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(true);

  function prevHandler() {
    if (step > 1) setStep((s) => s - 1);
  }
  function nextHandler() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setClose((s) => !s)}>
        &times;
      </button>
      {close && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <Butt bgColor={"#7950f2"} col={"#fff"} onClick={prevHandler}>
              prev
            </Butt>
            <Butt bgColor={"#7950f2"} col={"#fff"} onClick={nextHandler}>
              next
            </Butt>
          </div>
        </div>
      )}
    </>
  );
}
function Butt({ bgColor, col, onClick, children }) {
  return (
    <button style={{ backgroundColor: bgColor, color: col }} onClick={onClick}>
      {" "}
      {children}
    </button>
  );
}
export default App;
