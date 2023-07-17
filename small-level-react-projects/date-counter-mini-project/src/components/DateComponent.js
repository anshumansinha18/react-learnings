import React, { useState } from "react";

const date = new Date().toDateString();
export default function DateComponent({ count }) {
  let currDate = new Date(new Date().getTime() + count * 24 * 60 * 60 * 1000);
  return (
    <div style={{ marginTop: "10px" }}>
      <h1>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} from today is `
          : `${Math.abs(count)} days ago was `}{" "}
        {currDate.toDateString()}
      </h1>
    </div>
  );
}
