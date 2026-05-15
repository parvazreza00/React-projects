import React, { useState } from "react";

const Faq = ({ id, title, des }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-secondary-subtle m-auto mb-2 card w-75 shadow">
      <div className="card-body d-flex justify-content-between">
        <h5 className="ms-2"> {id}. {title}</h5>
        <span
          className="ms-2 fs-3 fw-bolder"
          onClick={() => setToggle(!toggle)}
          style={{ 'marginTop':'-15px', 'cursor':'pointer' }}
        >
          {toggle ? <span className="text-danger">-</span> : "+"}
        </span>
      </div>
      {toggle && <p className="ms-4">{des}</p>}
    </div>
  );
};

export default Faq;
