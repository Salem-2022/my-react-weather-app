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
  function updateCity(event) {
    setCity(event.target.value);
  }
  let imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab06a115531350a624a8309eb2a5ab0c&untis=metric`;
  axios.get(url).then(showWeather);

  return (
    <div className="row">
      <div className="col currentWeather">
        <ul>
          <li className="currentCity">{city}</li>
          <li className="currentDay">08:10</li>
          <li className="currentWeatherEmoji">
            <img src={imgUrl} alt="icon" />
            <span className="currentTemperature">
              {temperature}
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
          <li>Description:{description} </li>
          <li>Humidity:{humidity}%</li>
          <li>Wind: {wind}m/s </li>
        </ul>
      </div>

      <Forecast />
    </div>
  );
}
