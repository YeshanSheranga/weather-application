import React from "react";
import { FaCloudSunRain } from "react-icons/fa";
import "./WeatherRightCard.css";

const WeatherRightCard = (props) => {
  console.log("WeatherRightCardProps", props);
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="right-one">
      <div className="right-one-header">
        <div className="head">
          <h3>Colombo Weather Forcast Today</h3>
        </div>
      </div>
      <div className="right-one-monday">
        <FaCloudSunRain size={90} color="yellow" />
        <div className="place-timeFormat">
          <h2>{props.weather.name}</h2>
          <p>{formatDate(props.weather.dt)}</p>
          <p>
            {props.weather.Main}, {props.weather.Description}
          </p>
        </div>
      </div>
      <div className="right-one-tuesday">
        <div className="devOne">
          <ul>
            <li>Humidity : {props.weather.Humidity}%</li>
            <li>Clouds : {props.weather.Clouds}%</li>
            <li>Pressure : {props.weather.Pressure}hPa</li>
          </ul>
        </div>
      </div>
      <div className="right-one-wednesday">
        <div className="devTwo">
          <ul>
            <li>Sunrise:{props.weather.Sunrise}</li>
            <li>Sunset:{props.weather.Sunset}</li>
            <li>Feels-Like:{props.weather.FeelsLike}K</li>
          </ul>
        </div>
      </div>
      <div className="right-one-thursday">
        <div className="devThree">
          <ul>
            <li>Temp:{props.weather.Temperature}K</li>
            <li>Temp-Max:{props.weather.TemperatureMax}K</li>
            <li>Temp-Min:{props.weather.TemperatureMin}K</li>
          </ul>
        </div>
      </div>
      <div className="right-one-friday">
        <div className="devFour">
          <ul>
            <li>Wind-Deg:{props.weather.WindDeg}°</li>
            <li>Wind-Gust:{props.weather.WindGust}m/s</li>
            <li>Wind-Speed:{props.weather.WindSpeed}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherRightCard;
