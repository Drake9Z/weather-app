
const WeatherBox = ({ city, country, location, temperature, weatherState }) => {
  function icons() {
    const weatherImages = {
      "clear sky": "/1.svg",
      "few clouds": "/2.svg",
      "overcast clouds": "/3.svg",
      "broken clouds": "/4.svg",
      "shower rain": "/5.svg",
      "rain": "/6.svg",
      "snow": "/7.svg",
      "mist": "/8.svg",
      "thunderstorm": "/9.svg",
      "light rain": "/8.svg" 
    };

    return weatherImages[weatherState.state] || "/5.svg";
  }

  console.log(weatherState);

  return (
    <div className="weather">
      <div className="weather_box">
        <div className="weather-data">
          <div className="weather_temp">{Math.floor(temperature)}°</div>
            <p className="data-weather">VIENTO<span>{weatherState.wind} m/s</span></p>
            <p className="data-weather">NUBES<span>{weatherState.clouds} %</span></p>
            <p className="data-weather">PRESIÓN<span>{weatherState.pressure}</span></p>
          <div>
            {location && (
              <div className="location-box">
                <p className="location">
                  {{city}
                    ? `${location.city}, ${location.country}`
                    : { country }}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="weather-box_c2">
          <img
            className="weather_image"
            src={icons(weatherState.state)}
            alt="weather image"
          />
          <span className="data-status">{weatherState.state}</span>
        </div>
      </div>
      

      <button className="weather_button">Cambiar a F°</button>
    </div>
  );
};

export default WeatherBox;
