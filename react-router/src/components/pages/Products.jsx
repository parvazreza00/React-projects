import React, { useEffect, useState } from "react";

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
    <div>
      <h1>All Product page</h1>

      {isLoading && <p> Products are Loading ... </p>}
      
      {error && <p> {error} </p>}
      {products &&
        products.length > 0 &&
        products.map((product) => {
          const { id, title, brand, category, price, description } = product;
          return (
            <article key={id}>
              <h4>{title}</h4>
              <p>Brand: {brand}</p>
              <p>Category: {category}</p>
              <p>Price: {price}</p>
              <p>Details: {description && description.substring(0, 100)}..</p>
            </article>
          );
        })}
    </div>
  );
};

export default Products;
