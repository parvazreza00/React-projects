import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-light bg-danger">News</span>
      </h2>
      <div className="container py-4">
        <div className="row g-4">
          {articles.map((news, index) => (
            <NewsItem key={index} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsboard;
