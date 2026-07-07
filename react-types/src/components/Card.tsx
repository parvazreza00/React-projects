import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  console.log(children);
  return (
    <div>
      <div className="card shadow p-4">{children}</div>
    </div>
  );
};

export default Card;
