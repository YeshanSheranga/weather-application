import React, { useState } from 'react'
import './WeatherHourlyCard.css'
import { FaCloudSunRain } from "react-icons/fa";

const WeatherHourlyCard = (props) => {
  const[showResults, setShowResults] = useState(3);
  const[seeMore, setSeeMore] = useState(true);
  console.log("WeatherHourlyCard",props);

   const formatDate = (timestamp) => {
     const date = new Date(timestamp * 1000);
     return date.toLocaleDateString("en-US", {
       weekday: "long",
       month: "long",
       day: "numeric",
     });
   };

   const handleSeeMore = () =>{
    setShowResults(5);
    setSeeMore(false);
   }
  return (
    <div className="left-bottom left-bottom-search">
      {props.dailyWeather.daily ? (
        props.dailyWeather.daily
          .slice(0, showResults)
          .map((dailyData, index) => (
            <div className="hr-one">
              <div className="hr-one-details">
                <h4>{formatDate(dailyData.dt)}</h4>
                {/* <FaCloudSunRain size={50} color="yellow" /> */}
                <p>Humidity-{dailyData.humidity}%</p>
                <p>
                  Weather-{dailyData.weather[0].main},
                  {dailyData.weather[0].description}
                </p>
                <p>Temperature-{dailyData.temp.day}K</p>
                <p>WindSpeed-{dailyData.wind_speed}m/s</p>
                <p>Clouds-{dailyData.clouds}</p>
              </div>
            </div>
          ))
      ) : (
        <div className="search-today-weather">
          <h2>Search Today Weather From Any Where!!</h2>
          <FaCloudSunRain size={100} color="yellow" />
        </div>
      )}

      {props.dailyWeather.daily && (
        <button type="submit" className="btton" onClick={handleSeeMore}>
          {seeMore ? "See More" : "See Less"}
        </button>
      )}
    </div>
  );
}

export default WeatherHourlyCard