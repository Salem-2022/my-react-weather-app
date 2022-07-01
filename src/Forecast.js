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
      <div className="row forecast text-center">
        <div className="row">
          {forecastData.map(function (dailyDate, index) {
            if (index < 5) {
              return (
                <div className="dailyDate col" key={index}>
                  <ForecastDate forecastDate={dailyDate.dt} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="row">
          {imgUrl.map(function (dailyIcon, index) {
            if (index < 5) {
              return (
                <div className="dailyIcon col" key={index}>
                  <img src={dailyIcon} alt="/" />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="row">
          <ul className="dailyTemp">
            <li className="dailyTemp">
              {" "}
              {forecastData.map(function (dailyMaxTemp, index) {
                if (index < 5) {
                  return (
                    <span className="dailyMaxMinTemp">
                      <span key={index} className="maxTemp">
                        {Math.round(dailyMaxTemp.temp.max)}°{" "}
                      </span>
                      <span key={index} className="minTemp text-muted">
                        {Math.round(dailyMaxTemp.temp.min)}°{" "}
                      </span>
                    </span>
                  );
                } else {
                  return null;
                }
              })}
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
