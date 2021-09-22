import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

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
