import React, { useState } from "react";

export default function Units(props) {
  let [temp, setTemp] = useState(props.tempDefault);

  function farenheitTemp(event) {
    event.preventDefault();
    setTemp(Math.round(props.tempDefault * 9) / 5 + 32);
  }
  function celsiusTemp(event) {
    event.preventDefault();
    setTemp(Math.round(props.tempDefault));
  }
  if ({ temp } === props.tempDefault) {
    return (
      <span className="currentTemperature">
        {Math.round((props.tempDefault * 9) / 5 + 32)}
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
    return (
      <span className="currentTemperature">
        {Math.round(temp)}
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
