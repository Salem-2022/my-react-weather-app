import React from "react";

export default function ForecastDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.forecastDate * 1000);
  let day = days[date.getDay()];
  let hours = props.forecastDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.forecastDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="ForecastDate">
      {day} {hours}:{minutes}
    </div>
  );
}
