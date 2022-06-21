import React from "react";

export default function UpdatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedensday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.newDate.getDay()];
  let hours = props.newDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.newDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="UpdatedDate">
      {day} {hours}:{minutes}
    </div>
  );
}
