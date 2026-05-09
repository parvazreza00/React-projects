import React from "react";

import { FaRegTrashCan } from "react-icons/fa6";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const id = props.id;
  // console.log(props);

  const handleClick = (id)=> {
    props.onHandleRemoveTodo(id);
  } 
   return (
    <div
      className="card w-75 m-auto border-0 shadow-sm mb-3 rounded-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        transition: "0.3s",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center p-4">
        
        {/* Left Content */}
        <div>
          <p
            className="fw-bold mb-2 mb-0"
            style={{ color: "#2c3e50" }}
          >
            {title}
          </p>

          <p
            className="mb-0"
            style={{
              color: "#6c757d",
              fontSize: "15px",
              maxWidth: "500px",
            }}
          >
            {desc}
          </p>
        </div>

        {/* Delete Button */}
        <button
          className="btn border-0 rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "50px",
            height: "50px",
            background: "#ffe5e5",
            color: "#dc3545",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#dc3545";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ffe5e5";
            e.currentTarget.style.color = "#dc3545";
            e.currentTarget.style.transform = "scale(1)";
          }}
          onClick={()=> handleClick(id)}
        >
          <FaRegTrashCan size={20} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
