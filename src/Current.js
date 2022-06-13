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
  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    //Kelvin = T in ℃ + 273.15
    setTemperature(Math.round(response.data.main.temp - 273.15));
    setDescription(response.data.weather[0].description);
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
  }

  let imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab06a115531350a624a8309eb2a5ab0c&untis=metric`;
  axios.get(url).then(showWeather);

  return (
    <div>
      <div className="card-body mt-4 md-5">
        <form className="search-form" onSubmit={showCity}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-control search-text-input"
                placeholder="Enter the city's name"
                autoComplete="on"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col">
              <input
                type="submit"
                className="btn btn-primary searchButton"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col currentWeather">
          <ul>
            <li className="currentCity">{city}</li>
            <li className="currentDay">08:10</li>
            <li className="currentWeatherEmoji">
              <img src={imgUrl} alt="" />
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
    </div>
  );
}
