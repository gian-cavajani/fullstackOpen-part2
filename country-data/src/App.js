import React, { useState, useEffect } from "react";
import axios from "axios";

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
                console.log("countries", countries);
                console.log("country", coun);
                console.log("[country]", [coun]); //crea un array y mete al objeto adentro asi lo puede agarrar el prox return.
              }}>
              show
            </button>
          </p>
        ))}
      </div>
    );
  } else if (countries.length <= 1) {
    return (
      <div>
        <h2>{countries[0].name}</h2>
        <img src={countries[0].flag} width="150" />
        <p>capital {countries[0].capital}</p>
        <p>population {countries[0].population.toLocaleString()}</p>
        <h3>languages</h3>
        <ul>
          {countries[0].languages.map((atr, ind) => {
            return <li key={ind}>{atr.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>Search</p>
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
