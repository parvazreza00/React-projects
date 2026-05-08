import React, { useState } from 'react'

const NewTodo = (props) => {
    const [todo, setTodo] = useState("");

    const handleInputChange = (e) =>{
        setTodo(e.target.value);
    }
    const handleFormTodo = (e) =>{
        e.preventDefault();
        props.onNewTodos(todo);
    }
  return (
    <div>
        <form action="" onSubmit={handleFormTodo}>
            <label htmlFor="">New todo: </label>
            <input type="text" name="todo" id="todo" value={todo} onChange={handleInputChange} placeholder='Enter todo'/>
            <button type='submit'>Submit</button>
        </form>

      
    </div>
  )
}

export default NewTodo
