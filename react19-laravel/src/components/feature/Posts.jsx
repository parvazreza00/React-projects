import React, { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Mounting");
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok!");

        return res.json();
      })
      .then((data) => setPosts(data));
  }, [query]);

  useEffect(()=>{
    const timer = setInterval(()=>{
        setSeconds((prve) => prve + 1);
    },1000);
    return () => clearInterval(timer)
  },[]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div>
      <h1>Listing of Posts</h1>
      <div>Seconds : {seconds}</div>
      <input type="text" onChange={handleChange} placeholder="Search any post..." />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            <>
              {posts.map((post) => (
                <tr>
                  <td>{post.id} </td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
                <td>No Post Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// export default Posts
