import React, { useState } from "react";

export default function Units(props) {
  let [unit, setUnit] = useState("metric");

  function farenheitTemp(event) {
    event.preventDefault();
    setUnit("empirical");
  }
  function celsiusTemp(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <span className="currentTemperature">
        {Math.round(props.tempDefault)}
        <sup>
          <a href="/" onClick={celsiusTemp}>
            ℃
          </a>
        </sup>
        <sup>|</sup>
        <sup id="degF">
          <a href="/" onClick={farenheitTemp}>
            ℉
          </a>{" "}
        </sup>{" "}
      </span>
    );
  } else {
    let empirical = Math.round((props.tempDefault * 9) / 5 + 32);
    return (
      <span className="currentTemperature">
        {empirical}
        <sup>
          <a href="/" onClick={celsiusTemp}>
            ℃
          </a>
        </sup>
        <sup>|</sup>
        <sup id="degF">
          <a href="/" onClick={farenheitTemp}>
            ℉
          </a>{" "}
        </sup>{" "}
      </span>
    );
  }
}
