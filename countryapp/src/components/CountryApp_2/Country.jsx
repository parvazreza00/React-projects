import React from "react";

import './country.css'

const Country = (props) => {
  const { name, flags, capital, region, population } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  }
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div
        className="card h-100 shadow border-0 bg-secondary-subtle"
        style={{
          borderRadius: "15px",
          overflow: "hidden",
          transition: "0.3s",
        }}
      >
        <img
          src={flags.png}
          alt={name.common}
          className="card-img-top"
          style={{
            height: "180px",
            objectFit: "cover",
          }}
        />

        <div className="card-body">
          <h4 className="card-title fw-bold text-primary mb-3 text-center">
            {name.common}
          </h4>

          <p className="mb-2">
            <strong>Capital:</strong> {capital}
          </p>

          <p className="mb-2">
            <strong>Region:</strong> {region}
          </p>

          <p className="mb-3">
            <strong>Population:</strong> {population.toLocaleString()}
          </p>

          <button
            className="btn btn-danger w-100"
            onClick={() => {
              handleRemoveCountry(name.common);
            }}
          >
            Remove Country
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
