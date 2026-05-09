import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  console.log(props.todos.length);
  
  if (props.todos.length > 0)
    return (
      <div className="bg-secondary-subtle m-auto w-75 py-4">
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            onHandleRemoveTodo={props.onHandleRemoveTodo}
          />
        ))}
      </div>
    );
  else
    return (
      <div className="bg-secondary-subtle m-auto w-75 py-4">
        <div
          className="card w-75 m-auto border-0 shadow-sm mb-3 rounded-4 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
            transition: "0.3s",
          }}
        >
          <h3 className="text-center p-4">No Items</h3>
        </div>
      </div>
    );
};

export default Todos;
