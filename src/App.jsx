import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherBox from "./components/WeatherBox";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [weatherState, setWeatherState] = useState("");
  const [location, setLocation] = useState({ lat: "", lon: "" });
  const [tempFormat, setTempFormat] = useState ("");

  const api = {
    base: "https://api.openweathermap.org/data/2.5/weather",
    key: "67e31a8c7bec84e1d7e2ba27cdb34112",
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          axios
            .get(
              `${api.base}?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
              )
              .then((response) => {
                setLocation({
                  city: response.data.name,
                  country: response.data.sys.country,
                });
                setTemperature(response.data.main.temp);
                setWeatherState(response.data.weather[0].description);
            })
            .catch((error) => {
              console.log(error);
            });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = daysOfWeek[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year} `;
  };

  const getCity = () => {
    axios
      .get(`${api.base}?q=${city}&units=metric&appid=${api.key}`)
      .then((response) => {
        setCity(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCountry = () => {
    axios
      .get(`${api.base}?q=${city}&units=metric&appid=${api.key}`)
      .then((response) => {
        setCountry(response.data.sys.country);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWeather = () => {
    axios
      .get(`${api.base}?q=${city}&units=metric&appid=${api.key}`)
      .then((response) => {
        setTemperature(response.data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWeatherState = () => {
    axios
      .get(`${api.base}?q=${city}&units=metric&appid=${api.key}`)
      .then((response) => {
        setWeatherState(response.data.weather[0].description);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getWeather(city);
      getWeatherState(city);
      getCity(city);
      getCountry(city);
    }
  };
  

  return (
    <div className="App">
      <header>
        <h1>Weather app</h1>
        <div className="searcher-container">
          <input
            className="searcher-input"
            type="text"
            placeholder="Search location ..."
            value={city}
            onChange={(event) => setCity(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </header>
      <main>
        {location && (
          <div className="location-box">
            <div className="location">{{city} ? `${location.city}, ${location.country}` : {country}}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
        )}
        <WeatherBox 
        temperature={temperature}
        weatherState={weatherState}
        tempFormat={tempFormat}
        />
      </main>
    </div>
  );
}


export default App;
