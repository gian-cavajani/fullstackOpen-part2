import React from "react";
import Weather from "./Weather";

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

export default Countries;
