import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Country_2 from "./Country";
import Search_2 from "../countryApp_2/Search";

const Countries = () => {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region";

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCountries, setFilterCountries] = useState(countries);

  const fetchCountry = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetching country");
      }
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCountry();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const removeCountry = (name) => {
   const filters = filterCountries.filter(
    (country)=> country.name.common != name);
    setFilterCountries(filters)
  }

  const searchCountry = (searchValues)=>{
    const values = searchValues.toLowerCase();
    
    const newCountries = countries.filter((country)=>{
      const newName = country.name.common.toLowerCase();
      return newName.startsWith(values);
    });
    setFilterCountries(newCountries);
  }

  return (
    <div className="container py-4">
      <h1 className="text-center mb-5 fw-bold text-primary">🌍 Country App</h1>

     <Search_2 onSearchCountry={searchCountry} />
     

      {isLoading && (
        <h2 className="text-center text-warning">Country Is Loading...</h2>
      )}

      {error && <h2 className="text-center text-danger">{error}</h2>}

      <div className="row g-4">
        {
            filterCountries && filterCountries.map(country => {
                const countryNew = {country, id:uuidv4()}

                return <Country_2 {...countryNew} key={countryNew.id} onRemoveCountry={removeCountry}/>

            }) 
        }
      </div>

    </div>
  );
};

export default Countries;
