import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <h2 style={{ marginTop:"20px" }}>PostView</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
          }}
        >
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                }}
              >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default PostView;
