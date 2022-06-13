import { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

export default function Current() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  function showCity(event) {
    event.preventDefault();
  }
  function showWeather(response) {
    //Kelvin = T in ℃ + 273.15
    setTemperature(Math.round(response.data.main.temp - 273.15));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  return (
    <div className="row">
      <div className="col currentWeather">
        <ul>
          <li className="currentCity">Stockholm</li>
          <li className="currentDay">08:10</li>
          <li className="currentWeatherEmoji">
            ☀️
            <span className="currentTemperature">
              19
              <sup id="degC">
                <a href="/">℃</a>
              </sup>
              <sup>|</sup>
              <sup id="degF">
                <a href="/">℉</a>{" "}
              </sup>{" "}
            </span>{" "}
          </li>
        </ul>
      </div>
      <div className="col descriptions mt-5">
        <ul>
          <li>Description: </li>
          <li>Humidity: </li>
          <li>Wind: </li>
        </ul>
      </div>

      <Forecast />
    </div>
  );
}
