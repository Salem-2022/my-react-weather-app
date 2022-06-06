import React from "react";
import Forecast from "./Forecast";

export default function Current() {
  return (
    <div className="row">
      <div className="col currentWeather">
        <ul>
          <li className="currentCity">Stockholm</li>
          <li className="currentDay"></li>
          <li className="currentTemperature"></li>
          <span className="currentWeatherEmoji">
            ☀️ 19
            <sup id="degC">
              <a href="#">℃</a>
            </sup>
            <sup>|</sup>
            <sup id="degF">
              <a href="#">℉</a>{" "}
            </sup>{" "}
          </span>
        </ul>
        <Forecast />
      </div>
    </div>
  );
}