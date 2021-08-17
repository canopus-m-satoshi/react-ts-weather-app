import React, { useState } from 'react';

import './App.css';
import Form from './components/Form';
import Results from './components/Results';
import Title from './components/Title';

type ResultsStateType = {
  country: string;
  cityName: string;
  temprature: string;
  conditionText: string;
  icon: string;
};

function App() {
  const [city, setCity] = useState<string>('');
  const [results, setResults] = useState<ResultsStateType>({
    country: '',
    cityName: '',
    temprature: '',
    conditionText: '',
    icon: '',
  });

  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      'https://api.weatherapi.com/v1/current.json?key=d29317caee084dbfa93152740211608&q=London&aqi=no',
    )
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temprature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      });
  };

  return (
    <div className="App">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
}

export default App;
