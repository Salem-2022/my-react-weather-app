import React, { useState } from "react";
import axios from "axios";
import ForecastDate from "./ForecastDate";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState("");

  function showForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  let imgUrlFirst = `https://openweathermap.org/img/wn/${forecastData[0].weather[0].icon}@2x.png`;
  let imgUrlSecond = `https://openweathermap.org/img/wn/${forecastData[1].weather[1].icon}@2x.png`;
  let imgUrlThird = `https://openweathermap.org/img/wn/${forecastData[2].weather[2].icon}@2x.png`;
  let imgUrlFourth = `https://openweathermap.org/img/wn/${forecastData[3].weather[3].icon}@2x.png`;
  let imgUrlFifth = `https://openweathermap.org/img/wn/${forecastData[4].weather[4].icon}@2x.png`;

  if (ready) {
    console.log(forecastData[0]);
    return (
      <div className="row forecast">
        <div className="col">
          <ul>
            <li className="sat">
              <ForecastDate forecastDate={forecastData[0].dt} />
            </li>
            <li className="satEmoji">
              <img src={imgUrlFirst} alt="/" />
            </li>
            <li className="satTemperature">
              {" "}
              <small>
                <span>{Math.round(forecastData[0].temp.max)}° </span>{" "}
                <span>{Math.round(forecastData[0].temp.min)}° </span>
              </small>
            </li>{" "}
          </ul>
        </div>
        <div className="col">
          <ul>
            <li className="sun">
              <ForecastDate forecastDate={forecastData[1].dt} />
            </li>
            <li className="sunEmoji">
              <img src={imgUrlSecond} alt="" />
            </li>
            <li className="sunTemperature">
              {" "}
              <span>{Math.round(forecastData[1].temp.max)} ℃</span>
              <span> {Math.round(forecastData[1].temp.max)}℃</span>{" "}
            </li>{" "}
          </ul>
        </div>

        <div className="col">
          <ul>
            <li className="mon">
              <ForecastDate forecastDate={forecastData[2].dt} />
            </li>
            <li className="monEmoji">
              <img src={imgUrlThird} alt="" />
            </li>
            <li className="monTemperature">
              {" "}
              <span>{Math.round(forecastData[2].temp.max)} ℃</span>
              <span> {Math.round(forecastData[2].temp.max)}℃</span>{" "}
            </li>{" "}
          </ul>
        </div>

        <div className="col">
          <ul>
            <li className="tue">
              <ForecastDate forecastDate={forecastData[3].dt} />
            </li>
            <li className="tueEmoji">
              <img src={imgUrlFourth} alt="" />
            </li>
            <li className="tueTemperature">
              {" "}
              <span> {Math.round(forecastData[3].temp.max)}℃</span>
              <span> {Math.round(forecastData[3].temp.min)}℃</span>
            </li>{" "}
          </ul>
        </div>

        <div className="col">
          <ul>
            <li className="wed">
              <ForecastDate forecastDate={forecastData[4].dt} />
            </li>
            <li className="wedEmoji">
              <img src={imgUrlFifth} alt="" />
            </li>
            <li className="wedTemperature">
              {" "}
              <span> {Math.round(forecastData[4].temp.max)}℃</span>
              <span> {Math.round(forecastData[1].temp.min)}℃</span>
            </li>{" "}
          </ul>
        </div>
      </div>
    );
  } else {
    let apiKeySec = "d4b7a77de22e4c5dc546f41665d594cb";
    let apiUrlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coord.lat}&lon=${props.coord.lon}&appid=${apiKeySec}&units=metric`;
    axios.get(`${apiUrlOneCall}`).then(showForecast);
    return "Loading";
  }
}
