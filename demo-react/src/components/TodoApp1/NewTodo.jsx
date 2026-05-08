import React, { useState } from 'react'

const NewTodo = (props) => {
    // console.log(props);

    const [todo, setTodo] = useState("");

    const handleChangeTodo = (event) => {       
        setTodo(event.target.value);       
    }
    const handleTodoSubmit = (event) =>{
        event.preventDefault();
        props.onAddNewTodo(todo);
    }


  return (
    <div>
       <form action="" onSubmit={handleTodoSubmit}>
        <label htmlFor="">New Todo: </label>
        <input type="text" className="ms-2" name="todo" id="todo" value={todo} 
        onChange={handleChangeTodo} placeholder='Enter new todo'/>
        <input type="submit" value="Submit" />
       </form>      
    </div>
  )
}

export default NewTodo
