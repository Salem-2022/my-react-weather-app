import React from "react";
import axios from "axios";

export default function Forecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }

  let apiKeySec = "ab06a115531350a624a8309eb2a5ab0c";
  let apiUrlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKeySec}&units=metric`;
  axios.get(`${apiUrlOneCall}`).then(showForecast);

  //---

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
