import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  
  return (
    <div>
        <h2>Todo App</h2>
      {props.todos.map((todo, index) =>  (
        <Todo key={index} todo={todo}/>
      )
    )}

    </div>
  )
}

export default Todos
