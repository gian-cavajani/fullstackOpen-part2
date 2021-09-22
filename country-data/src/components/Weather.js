import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const params = {
      access_key: api_key,
      query: country.capital,
    };

    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        setWeather([response.data]);
      });
  }, []);
  if (weather.length > 0) {
    const weath = weather[0].current;
    console.log(weath);
    return (
      <div>
        <h2>{country.name}</h2>
        <img src={country.flag} width="150" />
        <p>capital {country.capital}</p>
        <p>population {country.population.toLocaleString()}</p>
        <h3>languages</h3>
        <ul>
          {country.languages.map((atr, ind) => {
            return <li key={ind}>{atr.name}</li>;
          })}
        </ul>
        <div>
          <h3>current weather in {country.capital}:</h3>
          <div>
            <p>
              <strong>temperature: </strong>
              {weath.temperature} Celsius
            </p>
            <p>
              <strong>humidity: </strong>
              {weath.humidity}
            </p>
            <img src={weath.weather_icons} alt="ico" />
            <p>
              <strong>wind:</strong> {weath.wind_speed} kmh direction{" "}
              {weath.wind_dir}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default Weather;
