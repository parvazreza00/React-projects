import React, { useEffect, useState } from "react";

import Post from "./Post";

const FetchData_2 = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     setTimeout(() => {

  //       fetch("https://jsonplaceholder.typicode.com/posts")
  //         .then((res) => {
  //           if (!res.ok) {
  //             throw new Error("Failed to fetching data");
  //           }
  //           return res.json();
  //         })
  //         .then((data) => {
  //           setPosts(data);
  //           setIsLoading(false);
  //           setError(null);
  //         })
  //         .catch((error) => {
  //           setError(error.message);
  //           setIsLoading(false);
  //         });
  //     }, 1000);
  //   }, []);

  useEffect(() => {
    // const fetchPostData = async () => {
    //   setTimeout(async () => {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const data = await res.json();
    //     setPosts(data);
    //     setIsLoading(false);
    //   }, 1000);
    // };
    // return fetchPostData;

    const timer = setTimeout(async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Failed ot fetch post data");
        }
        const data = await res.json();
        setPosts(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <h2>Fake api Data fetching using useEffect()</h2>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <p className="text-danger">Data is loading ...</p>}
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default FetchData_2;
