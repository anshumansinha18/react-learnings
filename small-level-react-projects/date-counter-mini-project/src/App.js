import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Step from "./components/Step";
import DateComponent from "./components/DateComponent";
import Reset from "./components/Reset";

function App() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Step steps={steps} setSteps={setSteps} />
      <Counter steps={steps} count={count} setCount={setCount} />
      <DateComponent count={count} />
      {count !== 0 || steps !== 1 ? (
        <Reset setSteps={setSteps} setCount={setCount} />
      ) : null}
    </div>
  );
}

export default App;
