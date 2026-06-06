import React from "react";
import { Link, useRouteError } from "react-router";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>

        <h2 className="mb-3">Oops! Page Not Found</h2>

        <p className="text-muted">
          {error?.statusText ||
            error?.message ||
            "The page you are looking for does not exist."}
        </p>

        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
