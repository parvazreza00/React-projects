import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const {id} = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  }

  return (
    <article
      className="todo px-2 rounded d-flex align-items-center justify-content-between"
      style={{ backgroundColor: "#D3D3D3" }}
    >
      <div>
        <p className="mb-0">{title}</p>
        <p className="mb-0 fs-6 text-muted">{desc}</p>
      </div>
      <div>
        <button className="btn text-danger p-0 border-0 mb-1" onClick={()=>handleClick(id)}>
          <FaRegTrashCan />
        </button>
      </div>
    </article>
  );
};

export default Todo;
