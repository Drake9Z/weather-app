import React, { useState } from 'react';



const WeatherBox = ({temperature, weatherState}) => {

    function icons () {
        
        const weatherImages = {
        "clear sky" : '/1.svg',
        "few clouds" : '/2.svg' ,
        "overcast clouds" : '/3.svg' ,
        "broken clouds" : '/4.svg' ,
        "shower rain" : '/5.svg' ,
        "rain" : '/6.svg' ,
        "snow" : '/7.svg' ,
        "mist" : '/8.svg' ,
        "thunderstorm" : '/9.svg' 
        };
    
        return weatherImages[weatherState] || "/5.svg";
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
            
            <button  className='weather_button'>Cambiar a F°</button>
        </div>
    );
};

export default WeatherBox;