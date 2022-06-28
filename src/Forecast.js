import React, { useState } from "react";
import axios from "axios";
import ForecastDate from "./ForecastDate";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);

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
    return (
      <div className="forecast">
        <div className="row forecast">
          <div className="col">
            <ul>
              <li className="sat">Thu</li>
              <li className="satEmoji">
                {" "}
                <img src={imgUrlFirst} alt="#" />
              </li>
              <li className="satTemperature">
                {" "}
                {Math.round(forecastData[0].temp.day)} ℃{" "}
              </li>{" "}
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="sun">
                <ForecastDate forecastDate={forecastData[1].dt * 1000} />
              </li>
              <li className="sunEmoji">
                <img src={imgUrlSecond} alt="" />
              </li>
              <li className="sunTemperature">
                {" "}
                {Math.round(forecastData[1].temp.day)} ℃{" "}
              </li>{" "}
            </ul>
          </div>

          <div className="col">
            <ul>
              <li className="mon">
                <ForecastDate forecastDate={forecastData[2].dt * 1000} />
              </li>
              <li className="monEmoji">
                <img src={imgUrlThird} alt="" />
              </li>
              <li className="monTemperature">
                {" "}
                {Math.round(forecastData[2].temp.day)} ℃{" "}
              </li>{" "}
            </ul>
          </div>

          <div className="col">
            <ul>
              <li className="tue">
                <ForecastDate forecastDate={forecastData[3].dt * 1000} />
              </li>
              <li className="tueEmoji">
                <img src={imgUrlFourth} alt="" />
              </li>
              <li className="tueTemperature">
                {" "}
                {Math.round(forecastData[3].temp.day)} ℃{" "}
              </li>{" "}
            </ul>
          </div>

          <div className="col">
            <ul>
              <li className="wed">
                <ForecastDate
                  forecastDate={Math.round(forecastData[4].dt * 1000)}
                />
              </li>
              <li className="wedEmoji">
                <img src={imgUrlFifth} alt="" />
              </li>
              <li className="wedTemperature">
                {" "}
                {Math.round(forecastData[4].temp.day)} ℃{" "}
              </li>{" "}
            </ul>
          </div>
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
