import React from "react";
import { useLocation, Link } from "react-router";
import './product_details.css'

const ProductDetails = () => {
  const { state } = useLocation();
  console.log(state)

  return (
    <div className="container py-3 py-md-5">
      <h3 className="text-center mb-4">Product Details</h3>
      {state && (
        <div className="card shadow-lg border-0">
          <div className="row g-0">
            {/* Product Image */}
            <div className="col-12 col-md-5">
              <img
                src={state.thumbnail}
                alt={state.title}
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
                  <h2 className="card-title mb-0">{state.title}</h2>

                  <span
                    className={`badge ${
                      state.stock > 0 ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {state.stock > 0
                      ? `${state.stock} In Stock`
                      : "Out of Stock"}
                  </span>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-6">
                    <p>
                      <strong>Brand:</strong> {state.brand}
                    </p>
                  </div>

                  <div className="col-sm-6">
                    <p>
                      <strong>Category:</strong> {state.category}
                    </p>
                  </div>

                  <div className="col-sm-6">
                    <p>
                      <strong>SKU:</strong> {state.sku}
                    </p>
                  </div>

                  <div className="col-sm-6">
                    <p>
                      <strong>Rating:</strong>
                      <span className="text-warning ms-2">
                        ⭐ {state.rating}
                      </span>
                    </p>
                  </div>
                </div>

                <h3 className="text-success fw-bold my-3">${state.price}</h3>

                <div className="mb-4">
                  <h5>Description</h5>
                  <p className="text-muted">{state.description}</p>
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
