import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaCloudSunRain } from "react-icons/fa";
import WeatherRightCard from "../WeatherRightCard/WeatherRightCard";
import WeatherHourlyCard from "../WeatherHourlyCard/WeatherHourlyCard";

const Home = () => {
  const apiKey = "61f936a42a7f35e778dccbd6f78a8725";
  const [resData, setResData] = useState({
    Humidity: "",
    Clouds: "",
    Pressure: "",
    Sunrise: "",
    Sunset: "",
    FeelsLike: "",
    Temperature: "",
    TemperatureMax: "",
    TemperatureMin: "",
    WindDeg: "",
    WindGust: "",
    WindSpeed: "",
    Main: "",
    Description: "",
  });
  const [DailyResponseData, setDailyResponseData] = useState({
    Humidity: "",
    Sunrise: "",
    Sunset: "",
    Main: "",
    Description: "",
    Dt: "",
    Clouds: "",
    Temperature: "",
    WindSpeed: "",
  });
  const [leftContent, setLeftContent] = useState(false);
  //const [Response, setResponse] = useState({});
  const [Latitude, setLatitude] = useState("");
  const [Lontitude, setLontitude] = useState("");
  const [LaLo, setLaLo] = useState(false);
  // const [showResults, setShowResults] = useState(4);
  const [Dat, setDat] = useState({});
  useEffect(() => {
    fetch(
      // "https://api.openweathermap.org/data/3.0/onecall?lat=7.8731&lon=80.7718&exclude={part}&appid=61f936a42a7f35e778dccbd6f78a8725"
      "https://api.openweathermap.org/data/2.5/weather?lat=6.9271&lon=79.8612&appid=61f936a42a7f35e778dccbd6f78a8725"
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("Response", response);
        setResData({
          ...response,
          Humidity: response.main.humidity,
          Clouds: response.clouds.all,
          Pressure: response.main.pressure,
          Sunrise: response.sys.sunrise,
          Sunset: response.sys.sunset,
          FeelsLike: response.main.feels_like,
          Temperature: response.main.temp,
          TemperatureMax: response.main.temp_max,
          TemperatureMin: response.main.temp_min,
          WindDeg: response.wind.deg,
          WindGust: response.wind.gust,
          WindSpeed: response.wind.speed,
          Main: response.weather[0].main,
          Description: response.weather[0].description,
        });
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLeftContent(true);
    console.log("Handle Submit Function");
    console.log("Latitude", Latitude);
    console.log("Lontitude", Lontitude);
    console.log("event", e);
    if (Latitude && Lontitude !== "") {
      setLaLo(true);
    } else {
      console.log("Enter the Lontitude and Latitude");
    }

    const url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      Lontitude +
      "&lon=" +
      Latitude +
      "&exclude=hourly,minutely&appid=" +
      apiKey;

    try {
      const dailyResponse = await fetch(url);
      const data = await dailyResponse.json();
      setDat(data);
      console.log("Data", data);
      setDailyResponseData({
        ...data,
        Humidity: data.current.humidity,
        Sunrise: data.current.sunrise,
        Sunset: data.current.sunset,
        Main: data.current.weather[0].main,
        Description: data.current.weather[0].description,
        Dt: data.current.dt,
        Clouds: data.current.clouds,
        Temperature: data.current.temp,
        WindSpeed: data.current.wind_speed,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };
  console.log("resData", resData);
  console.log("DailyResponseData", DailyResponseData);
  console.log("Dat", Dat);
  return (
    <div className="main-container">
      <div className="home">
        <div className="left-one">
          <div className="left-top">
            <form onSubmit={handleSubmit}>
              <div className="latitude">
                <input
                  type="text"
                  placeholder="Latitude"
                  onChange={(e) => setLatitude(e.target.value)}
                  value={Latitude}
                />
              </div>
              <div className="lontitude">
                <input
                  type="text"
                  placeholder="Lontitude"
                  onChange={(e) => setLontitude(e.target.value)}
                  value={Lontitude}
                />
              </div>
              <button type="submit" className="btn">
                Search
              </button>
            </form>
          </div>
          {leftContent && LaLo && (
            <div className="left-content">
              <div className="col-one">
                <div className="col-one-details">
                  <div className="city">
                    <h4>{formatDate(DailyResponseData.Dt)}</h4>
                  </div>
                  <div className="sky">
                    <h2>{DailyResponseData.Temperature}K</h2>
                  </div>
                  <div className="number">
                    <h4>
                      {DailyResponseData.Main}, {DailyResponseData.Description}
                    </h4>
                  </div>
                  <div className="tem">
                    <p>{DailyResponseData.WindSpeed} m/s</p>
                  </div>
                </div>
              </div>
              <div className="col-two">
                <div className="col-two-details">
                  <FaCloudSunRain size={70} color="yellow" />
                </div>
              </div>
              <div className="col-three">
                <div className="col-three-details">
                  <h4>{DailyResponseData.Humidity}%</h4>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col-four">
                <div className="col-four-details">
                  <h4>{DailyResponseData.Sunrise}</h4>
                  <p>Sunrise</p>
                </div>
              </div>
              <div className="col-five">
                <div className="col-five-details">
                  <h4>{DailyResponseData.Sunset}</h4>
                  <p>Sunset</p>
                </div>
              </div>
            </div>
          )}

          {DailyResponseData && (
            <WeatherHourlyCard dailyWeather={DailyResponseData} />
          )}
        </div>
        <WeatherRightCard weather={resData} />
      </div>
    </div>
  );
};

export default Home;
