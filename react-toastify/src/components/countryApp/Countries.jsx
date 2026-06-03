import React from "react";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid';

import Country from './Country'

const Countries = () => {
  const url =
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region";

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch countries");
      }
      const data = await response.json();
      setCountries(data);
      setError(null);
    } catch (error) {      
      setError(error.message);
    }finally{
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div>
      <h1>Country App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {
        countries.map((country) => {
            const countryNew = {country, id:uuidv4()}
            return <Country {...countryNew} key={countryNew.id}/>
        })
      }
    </div>
  );
};

export default Countries;
