import React from "react";

export default function Step({ steps, setSteps }) {
  function handleSeek(e) {
    setSteps(Number(e.target.value));
  }
  return (
    <div class="container">
      <div class="slidecontainer">
        <input
          type="range"
          min="0"
          max="10"
          value={steps}
          class="slider"
          id="myRange"
          onChange={handleSeek}
        />
      </div>
      <div>Step: {steps}</div>
    </div>
  );
}
