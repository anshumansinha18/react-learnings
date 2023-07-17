import React from "react";

export default function Reset({ setSteps, setCount }) {
  function handleClick() {
    setSteps(1);
    setCount(0);
  }
  return <button onClick={handleClick}>Reset</button>;
}
