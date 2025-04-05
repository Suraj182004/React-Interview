import React from 'react'
import { useState, useEffect } from 'react';

const Wheater = () => {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const API_KEY = "aadfad5f3fd80749745ee56122a75f04";

    const getWeather = async () => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            if(!res.ok) throw new Error('failed to fetch');
            const data = await res.json();
            setWeather(data);
            setError('');
        } catch (error) {
            setError(error.message)
            setWeather(null);
        } 
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if(city.trim() !== ''){
            getWeather();
        }
    };
  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: 'auto' }}>
    <h2>🌦️ Weather App</h2>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: '10px' }}>
        Search
      </button>
    </form>

    {error && <p style={{ color: 'red' }}>{error}</p>}

    {weather && (
      <div style={{ marginTop: '20px' }}>
        <h3>📍 {weather.name}</h3>  
        <p>🌡️ {weather.main.temp} °C</p>
        <p>☁️ {weather.weather[0].description}</p>
      </div>
    )}
  </div>
  )
}

export default Wheater