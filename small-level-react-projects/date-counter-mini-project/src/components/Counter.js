import React from "react";
export default function Counter({ steps, count, setCount }) {
  function handleMinus() {
    setCount((count) => Number(count) - steps);
  }

  function handlePlus() {
    setCount((count) => Number(count) + steps);
  }
  function handleChange(e) {
    setCount(e.target.value);
  }
  return (
    <div className="container">
      <button onClick={handleMinus}>-</button>
      <input type="number" value={count} onChange={handleChange}></input>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}
