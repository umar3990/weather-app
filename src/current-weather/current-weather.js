import React from "react";
import "./current-weather.css";

//RETRIEVES DATA FROM API AMD DISPLAYS SELETECED DATA WITH A BREIF DESCRIPTION 

const CurrentWeather = ({ data }) => {
  return (
    <div className="weatherElement">
      <div className="top">
        <div> 
          <p className="location">{data.city}</p>
          <p className="weatherDescription">{data.weather[0].description}</p>
        </div>
        <img //DISPLAY ICON FOR WEATHER
         
          className="weatherIcon"
          src={`icons/${data.weather[0].icon}.png`}
        /> 
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}c</p>
        <div className="extras">
       
          <div className="weatherRow">
            <span className="weatherLabel">Feels like</span>
            <span className="weatherLabel">
              {Math.round(data.main.feels_like)}c
            </span>
          </div>
          <div className="weatherRow">
            <span className="weatherLabel">Wind</span>
            <span className="weatherLabel">{data.wind.speed} m/s</span>
          </div>
          <div className="weatherRow">
            <span className="weatherLabel">Humidity</span>
            <span className="weatherLabel">{data.main.humidity}%</span>
          </div>
          <div className="weatherRow">
            <span className="weatherLabel">Pressure</span>
            <span className="weatherLabel">{data.main.pressure} hPa</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;