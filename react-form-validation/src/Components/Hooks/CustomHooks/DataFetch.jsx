import React, { useEffect, useState } from "react";

import Post from "./Post";
import useFetch from "./useFetch";

const FetchData_2 = () => {
  const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="container">
      <h2>Fake api Data fetching using useEffect()</h2>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <p className="text-danger">Data is loading ...</p>}
      {data && data.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default FetchData_2;
