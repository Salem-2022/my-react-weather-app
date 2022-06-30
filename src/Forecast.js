import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDate from "./ForecastDate";
import "./Weather.css";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecastData, setForecastData] = useState("");

  useEffect(() => {
    setReady(false);
  }, [props]);

  function showForecast(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }
  if (ready) {
    let imgUrlFirst = `https://openweathermap.org/img/wn/${forecastData[0].weather[0].icon}@2x.png`;

    let imgUrlSecond = `https://openweathermap.org/img/wn/${forecastData[1].weather[0].icon}@2x.png`;
    let imgUrlThird = `https://openweathermap.org/img/wn/${forecastData[2].weather[0].icon}@2x.png`;
    let imgUrlFourth = `https://openweathermap.org/img/wn/${forecastData[3].weather[0].icon}@2x.png`;
    let imgUrlFifth = `https://openweathermap.org/img/wn/${forecastData[4].weather[0].icon}@2x.png`;
    let imgUrl = [
      imgUrlFirst,
      imgUrlSecond,
      imgUrlThird,
      imgUrlFourth,
      imgUrlFifth,
    ];
    return (
      <div className="row forecast">
        <div className="row">
          <ul>
            {forecastData.map(function (dailyDate, index) {
              if (index < 5) {
                return (
                  <li className="dailyDate" key={index}>
                    <ForecastDate forecastDate={dailyDate.dt} />
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
        <div className="row">
          <ul>
            {imgUrl.map(function (dailyIcon, index) {
              if (index < 5) {
                return (
                  <li className="dailyIcon" key={index}>
                    <img src={dailyIcon} alt="/" />
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
        <div className="row">
          <ul>
            <li className="dailyTemp">
              {" "}
              <small>
                {forecastData.map(function (dailyMaxTemp, index) {
                  if (index < 5) {
                    return (
                      <span key={index}>
                        {Math.round(dailyMaxTemp.temp.max)}°{" "}
                      </span>
                    );
                  } else {
                    return null;
                  }
                })}
                {forecastData.map(function (dailyMaxTemp, index) {
                  if (index < 5) {
                    return (
                      <span key={index}>
                        {Math.round(dailyMaxTemp.temp.min)}°{" "}
                      </span>
                    );
                  } else {
                    return null;
                  }
                })}
              </small>
            </li>{" "}
          </ul>
        </div>
      </div>
    );
  } else {
    let apiKeySec = "ce0532e620af9e4ac6e339613de6decd";
    let apiUrlOneCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKeySec}&units=metric`;
    axios.get(`${apiUrlOneCall}`).then(showForecast);
    return "Loading";
  }
}
