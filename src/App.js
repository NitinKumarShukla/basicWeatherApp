import React, { useState, useEffect } from 'react';
import WeatherSearch from './components/weatherSearch';
import WeatherBackground from './components/weatherBackground';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (query) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Log data for debugging
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWeather(data);
        } catch (error) {
          console.error('Error fetching weather data for location:', error);
        }
      },
      (error) => {
        console.error('Error retrieving location:', error);
      }
    );
  }, []);

  return (
    <div className='relative flex flex-col-reverse max-h-screen'>
      {weather && weather.weather && weather.weather[0] && (
        <WeatherBackground condition={weather.weather[0]?.main}>
          <p className='tracking-wide text-xl leading-9 font-thin'>{weather.name}</p>
          <p className='tracking-wide text-sm font-normal'>{weather.weather[0]?.description}</p>
          <p className='text-xl font-normal'>{weather.main?.temp}°C</p>
        </WeatherBackground>
      )}
      <WeatherSearch onSearch={fetchWeather} />
    </div>
  );
}

export default App;
