import React from 'react';

type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temprature: string;
    conditionText: string;
    icon: string;
  };
};

const Results = (props: ResultsPropsType) => {
  return (
    <div>
      {props.results.cityName && <div>{props.results.cityName}</div>}
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.temprature && (
        <div>
          {props.results.temprature}
          <span>°C</span>
        </div>
      )}
      {props.results.conditionText && (
        <div>
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>
      )}
      {/* <h2>
        Weather Data {props.results.country} {2 < 4 && <p>正しいですか？</p>}
      </h2> */}
    </div>
  );
};

export default Results;
