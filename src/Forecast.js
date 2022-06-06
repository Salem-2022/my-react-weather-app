import React from "react";
export default function Forecast() {
  return (
    <div className="row forecast">
      <div className="col">
        <ul>
          <li className="sat">Saturday</li>
          <li className="satEmoji">🌤</li>
          <li className="satTemperature"> 17 ℃ </li>{" "}
        </ul>
      </div>

      <div className="col">
        <ul>
          <li className="sun">Sunday</li>
          <li className="sunEmoji">🌥</li>
          <li className="sunTemperature"> 15 ℃ </li>{" "}
        </ul>
      </div>

      <div className="col">
        <ul>
          <li className="mon">Monday</li>
          <li className="monEmoji">☁️</li>
          <li className="monTemperature"> 13 ℃ </li>{" "}
        </ul>
      </div>

      <div className="col">
        <ul>
          <li className="tue">Tuesday</li>
          <li className="tueEmoji">🌧</li>
          <li className="tueTemperature"> 10 ℃ </li>{" "}
        </ul>
      </div>

      <div className="col">
        <ul>
          <li className="wed">Wedensday</li>
          <li className="wedEmoji">🌦</li>
          <li className="wedTemperature"> 12 ℃ </li>{" "}
        </ul>
      </div>
    </div>
  );
}
