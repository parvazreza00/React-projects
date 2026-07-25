import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import './products.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("May be occured for fetching data!");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">All Products</h1>

      {isLoading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="row">
        {products &&
          products.length > 0 &&
          products.map((product) => {
            const {
              id,
              title,
              brand,
              category,
              price,
              description
              thumbnail,
            } = product;

            return (
              <div key={id} className="col-md-4 col-lg-3 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={thumbnail}
                    className="card-img-top"
                    alt={title}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>

                    <p className="mb-1">
                      <strong>Brand:</strong> {brand}
                    </p>

                    <p className="mb-1">
                      <strong>Category:</strong> {category}
                    </p>

                    <p className="text-success fw-bold">${price}</p>

                    <p className="card-text">
                      {description?.substring(0, 80)}...
                    </p>

                    <Link
                      to={`/products/${id}`}                      
                      className="btn btn-primary mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
