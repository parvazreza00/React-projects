import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";

import "./product_details.css";

const ProductDetails = () => {
  // const { state } = useLocation();
  // console.log(state);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product!");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="container py-3 py-md-5">
      <h1 className="text-center mb-4">Product Details</h1>

      {isLoading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <div className="alert alert-danger text-center">{error}</div>}

      {!error && !isLoading && product?.id && (
        <div className="card shadow-lg border-0">
          <div className="row g-0">
            {/* Product Image */}
            <div className="col-12 col-md-5">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid w-100"
                style={{
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Product Information */}
            <div className="col-12 col-md-7">
              <div className="card-body p-3 p-md-4">
                {/* Title & Stock */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
                  <h2 className="card-title mb-0">{product.title}</h2>

                  <span
                    className={`badge ${
                      product.stock > 0 ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {product.stock > 0
                      ? `${product.stock} In Stock`
                      : "Out of Stock"}
                  </span>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-6">
                    <p>
                      <strong>Brand:</strong> {product.brand}
                    </p>
                  </div>

                  <div className="col-sm-6">
                    <p>
                      <strong>Category:</strong> {product.category}
                    </p>
                  </div>

                  <div className="col-sm-6">
                    <p>
                      <strong>SKU:</strong> {product.sku}
                    </p>
                  </div>

                  <div className="col-sm-6">
                    <p>
                      <strong>Rating:</strong>
                      <span className="text-warning ms-2">
                        ⭐ {product.rating}
                      </span>
                    </p>
                  </div>
                </div>

                <h3 className="text-success fw-bold my-3">${product.price}</h3>

                <div className="mb-4">
                  <h5>Description</h5>
                  <p className="text-muted">{product.description}</p>
                </div>

                {/* Buttons */}
                <div className="d-grid gap-2 d-md-flex">
                  <button className="btn btn-primary">Add To Cart</button>

                  <button className="btn btn-outline-secondary">
                    Add To Wishlist
                  </button>

                  <Link className="btn btn-info text-white" to="/">
                    Go to Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
