import React, { useState } from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';

 const dummyTodos = ["todo1", "todo2"];

const Home = () => {
    const [todos, setTodo] = useState(dummyTodos);
   
    const addNewTodo = (newtodo)=>{
        console.log(newtodo)
        setTodo([...todos, newtodo])
    }
  return (
    <div>
        <NewTodo onAddNewTodo={addNewTodo}/>
        <Todos todos={todos}/>
      
    </div>
  )
}

export default Home
