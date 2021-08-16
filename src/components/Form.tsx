import React, { useState } from 'react';

function Form() {
  const [city, setCity] = useState<string>('');

  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      'https://api.weatherapi.com/v1/current.json?key=d29317caee084dbfa93152740211608&q=London&aqi=no',
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit" onClick={getWeather}>
        Get Weather
      </button>
    </form>
  );
}

export default Form;
