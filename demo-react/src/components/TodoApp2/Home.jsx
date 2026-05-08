import React, { useState } from 'react'
import NewTodo from '../TodoApp2/NewTodo';
import Todos from '../TodoApp2/Todos';

const dummyTodos = ["todo 1", "todo 3"];

const Home = () => {
    const [todos, setTodos] = useState(dummyTodos);
    const newTodos = (newtodo) => {
        setTodos([...todos, newtodo]);
    }

  return (
    <div>

        <NewTodo onNewTodos={newTodos}/>
        <Todos todos={todos}/>

      
    </div>
  )
}

export default Home
