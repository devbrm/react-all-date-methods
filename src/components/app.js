import React from "react";
import Clock from "./clock";
import Methods from "./dateMethods";

export default function App() {
  return (
    <div>
      <h1>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
          target="_blank"
        >
          Date Object Methods
        </a>
      </h1>
      <Methods />
    </div>
  );
}
