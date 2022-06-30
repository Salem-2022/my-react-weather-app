import React, { useState } from "react";
import axios from "axios";
import UpdatedDate from "./UpdatedDate";
import Units from "./Units";
import Forecast from "./Forecast";

export default function Current() {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState("Stockholm");
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    //Kelvin = T in ℃ + 273.15
    setWeather({
      city: response.data.name,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp - 273.15),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }
  let imgUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce0532e620af9e4ac6e339613de6decd&untis=metric`;
    axios.get(url).then(showWeather);
  }
  function showCity(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div>
        <div className="card-body mt-4 md-5">
          <form className="search-form" onSubmit={showCity}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control search-text-input"
                  placeholder="Enter the city's name"
                  autoComplete="off"
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
              <li className="currentCity">{weather.city}</li>

              <li className="currentDay">
                <UpdatedDate newDate={weather.date} />{" "}
              </li>
              <li className="currentWeatherEmoji">
                <img src={imgUrl} alt="" />

                <Units tempDefault={weather.temperature} />
              </li>
            </ul>
          </div>
          <div className="col descriptions mt-5">
            <ul>
              <li>Description:{weather.description} </li>
              <li>Humidity:{weather.humidity}%</li>
              <li>Wind: {weather.wind}m/s </li>
            </ul>
          </div>
        </div>

        <Forecast coord={weather.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
