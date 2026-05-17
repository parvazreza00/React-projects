import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
import Search from "./Search";

const Countries = () => {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region";

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCountries, setFilterCountries] = useState(countries);

  const fetchData = async () => {
    setIsLoading(false);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetching data!");
      }
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setError(null);
      console.log(countries);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRemoveCountry = (name) => {
    const filters = filterCountries.filter(
      (country) => country.name.common != name,
    );
    setFilterCountries(filters);
  };

  const searchCountry = (searchValue) => {
    let value = searchValue.toLowerCase();

    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountries(newCountries);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-5 fw-bold text-primary">🌍 Country App</h1>

      <Search onSearchCountry={searchCountry} />

      {isLoading && (
        <h2 className="text-center text-warning">Country Is Loading...</h2>
      )}

      {error && <h2 className="text-center text-danger">{error}</h2>}

      <div className="row g-4">
        {filterCountries &&
          filterCountries.map((country) => {
            const countryNew = {
              country,
              id: uuidv4(),
            };

            return (
              <Country
                {...countryNew}
                key={countryNew.id}
                onRemoveCountry={handleRemoveCountry}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Countries;
