import React, { useContext, useEffect } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';
import { Context } from '../Context/Context';

const Weather = () => {
  const { GetWeatherReport, input, setInput, city, temperature, humidity, windSpeed,icon } = useContext(Context);

  useEffect(() => {
    GetWeatherReport("Faisalabad"); 
  }, []);

  return (
    <div className='weather'>
      <div className="search-bar">
        <input 
          onChange={(e) => setInput(e.target.value)} 
          value={input} 
          type="text" 
          placeholder='Search' 
        />
        <img 
          onClick={() => GetWeatherReport(input)} 
          src={search_icon} 
          alt="search" 
        />
      </div>
      <img src={icon} alt="clear weather" className='weather-icon' />
      <p className='temperature'>{temperature}</p>
      <p className='location'>{city}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <div>
            <p>{humidity}</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind speed" />
          <div>
            <p>{windSpeed}</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
