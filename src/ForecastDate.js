import React from "react";

export default function ForecastDate(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let date = new Date(props.forecastDate * 1000);
  let day = days[date.getDay()];

  return <div className="ForecastDate">{day}</div>;
}
