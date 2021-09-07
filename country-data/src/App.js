import React, { useState, useEffect } from "react";
import axios from "axios";
const Weather = ({ country }) => {
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  // const { temperature } = weather.current;
  // console.log("curren", temperature);
  useEffect(() => {
    const params = {
      access_key: "cc697f04571dcded88015e4cd24563db",
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
            <p><strong>humidity: </strong>{weath.humidity}</p>
            <img src={weath.weather_icons} alt="ico" />
            <p>
              <strong>wind:</strong> {weath.wind_speed} kmh direction {weath.wind_dir}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

const Countries = ({ countries, setFiltCountry }) => {
  if (countries.length <= 10 && countries.length >= 2) {
    return (
      <div>
        {countries.map((coun, ind) => (
          <p key={ind}>
            {" "}
            {coun.name}
            <button
              onClick={() => {
                setFiltCountry([coun]);
                // console.log("countries", countries);
                // console.log("country", coun);
                // console.log("[country]", [coun]); //crea un array y mete al objeto adentro asi lo puede agarrar el prox return.
              }}>
              show
            </button>
          </p>
        ))}
      </div>
    );
  } else if (countries.length === 1) {
    return <Weather country={countries[0]} />;
  } else {
    return (
      <div>
        <p>Search to retrieve data from countries</p>
      </div>
    );
  }
};

function App() {
  const [filtCountry, setFiltCountry] = useState([]);
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState("");
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilter = (event) => {
    setFiltered(event.target.value);
    if (filtered) {
      const regex = new RegExp(filtered, "i");
      const countriesToShow = () =>
        countries.filter((country) => country.name.match(regex));
      setFiltCountry(countriesToShow);
    }
  };

  return (
    <article>
      <section>
        <span>search country: </span>
        <input type="text" onChange={handleFilter} value={filtered} />
      </section>
      <Countries countries={filtCountry} setFiltCountry={setFiltCountry} />
    </article>
  );
}

export default App;
