import React from "react";
import Todo from "./Todo";


const Todos = (props) => {
  return (
    <section >
      {props.todos.map((todo) => (
        <div className="card-body p-1 p-1 mb-2" key={todo.id}>
          <Todo todo={todo.todo} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>
        </div>
      ))}
    </section>
  );
};

export default Todos;
