import React from "react";

import newsImage from '../assets/news-image.jpg'

const NewsItem = ({ news }) => {
  const { author, content, description, publishedAt, title, url, urlToImage } =
    news;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card h-100 shadow-lg border-0 rounded-4">
        <img
          src={urlToImage || newsImage}
          className="card-img-top"
          alt={title || "No news"}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge bg-primary mb-2 w-25">News</span>

          <h5 className="card-title fw-bold">{title}</h5>

          <p className="text-muted mb-1">
            <strong>Author:</strong> {author || "Unknown"}
          </p>

          <small className="text-secondary mb-2">
            {new Date(publishedAt).toLocaleDateString()}
          </small>

          <p>{description}</p>

          <p className="small text-muted flex-grow-1">
            {content ? content.slice(0, 120) + "..." : "No content available."}
          </p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto"
          >
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
