import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if(!res.ok){
          throw new Error("Faile to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
         setIsLoading(false);
         setError(null);
      })
      .catch((error)=>{
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");

        // Check response status
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setTodos(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    // cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <h1>Data fetching by useEffect Hook</h1>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <p className="text-danger">Todos Data is loding..</p>}
      {todos &&
        todos.map((todo) => {
          return <p key={todo.id}>{todo.title}</p>;
        })}
    </div>
  );
};

export default DataFetch;
