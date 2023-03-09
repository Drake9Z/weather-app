import React, { useState } from 'react';



const WeatherBox = ({temperature, weatherState}) => {

    function icons () {
        
        const weatherImages = {
        "clear sky" : 'public/1.svg',
        "few clouds" : 'public/2.svg' ,
        "overcast clouds" : 'public/3.svg' ,
        "broken clouds" : 'public/4.svg' ,
        "shower rain" : 'public/5.svg' ,
        "rain" : 'public/6.svg' ,
        "snow" : 'public/7.svg' ,
        "mist" : 'public/8.svg' ,
        "thunderstorm" : 'public/9.svg' 
        };
    
        return weatherImages[weatherState] || "public/5.svg";
    };

    return (
        <div className='weather'>
            <div className='weather_box'>
                <div className='weather_temp'>
                {Math.floor(temperature)}°C
                </div>
                <img className='weather_image' src={icons(weatherState)} alt="weather image" /> 
            </div>
            <span>{weatherState}
            </span>
            
            <button onClick={setTempFormat} className='weather_button'>Cambiar a F°</button>
        </div>
    );
};

export default WeatherBox;