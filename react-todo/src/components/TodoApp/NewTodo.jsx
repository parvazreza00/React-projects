import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  const handleTodoForm = (event) => {
    event.preventDefault();
    props.onAddNewTodo(todo);
    setTodo({title: "", desc:""})
  }

  return (
    <div className="bg-secondary-subtle m-auto w-75 py-4 mb-4">
      <div className="card py-2 w-75 m-auto">
        <div className="card-body">
          <form action="" onSubmit={handleTodoForm}>
            <div className="row mb-2">
              <div className="col-md-2">
                <label htmlFor="">Title</label>
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-2">
                <label htmlFor="">Description</label>
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  name="desc"
                  className="form-control"
                  value={desc}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-2 text-center">
              <button className="btn btn-primary text-uppercase" type="submit">
                Create ToDo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTodo;
