import React from "react";
import axios from "axios";
import Form from "./Form";
import Current from "./Current";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container mt-5">
        <div className="card">
          <div className="card-body mt-4 md-5">
            <Form />
          </div>
          <Current />
        </div>
        <a href="https://github.com/Salem-2022/my-react-weather-app">
          Open-source code on GitHub
        </a>{" "}
        and{" "}
        <a href="https://jade-genie-8cbb12.netlify.app/">hosted on Netlify.</a>
      </div>
    </div>
  );
}
