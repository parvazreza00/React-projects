import React from "react";
import { Card, Badge } from "react-bootstrap";
import dateFormat, { masks } from "dateformat";

const now = new Date();

const DishComments = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className="mt-4">
        <Card className="shadow-sm border-0 rounded-4 p-4 text-center">
          <h5 className="text-muted mb-0">No comments available.</h5>
        </Card>
      </div>
    );
  }

  return (
    <div className="">
      <h5 className="text-center mb-4">⭐ Customer Reviews</h5>

      {comments.map((comment) => (
        <Card
          key={comment.id}
          className="shadow-sm border-0 rounded-4 mb-4"
        >
          <Card.Body>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 className="fw-bold mb-1">{comment.author}</h5>
                <small className="text-muted" style={{ fontSize:'23px' }}>
                  {dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
               
                </small>
              </div>

              <Badge text="dark" className="fs-6 px-3 py-2">
                {"⭐".repeat(comment.rating)} ({comment.rating}/5)
              </Badge>
            </div>

            <Card.Text
              className="fs-5 text-secondary"
              style={{ lineHeight: "1.8" }}
            >
              “{comment.comment}”
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default DishComments;