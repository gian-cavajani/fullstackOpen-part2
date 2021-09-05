import React, { useState, useEffect } from "react";
import axios from "axios";

const Countries = ({ countries }) => {
  return (
    <ul>
      {countries.map((coun, ind) => {
        if (countries.length === 1) {
          return (
            <div key={ind}>
              <h2>{coun.name}</h2>
              <img src={coun.flag} width="150" />
              <p>capital {coun.capital}</p>
              <p>population {coun.population.toLocaleString()}</p>
              <h3>languages</h3>
              <ul>
                {coun.languages.map((atr, ind) => {
                  return <li key={ind}>{atr.name}</li>;
                })}
              </ul>
            </div>
          );
        } else if (countries.length <= 10) {
          return (
            <li key={ind}>
              <p>Country name: {coun.name}</p>
            </li>
          );
        }
      })}
    </ul>
  );
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
  console.log("a", filtCountry);

  return (
    <article>
      <section>
        <span>search country: </span>
        <input type="text" onChange={handleFilter} value={filtered} />
      </section>
      <Countries countries={filtCountry} />
    </article>
  );
}

export default App;
