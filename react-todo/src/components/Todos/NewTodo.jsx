import React, { useState } from 'react'

const NewTodo = (props) => {
    const [todo, setTodo] = useState({title:"", desc:""});
    const {title, desc} = todo;

    const handleChange = (event) => {
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]:event.target.value}
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title: "", desc:""})
    }
  return (
    <div className='container py-2'>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor="">Titile: </label>
                <input type="text" name='title' id="title" className='w-100' value={title}
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="">Description: </label>                
                <textarea name='desc' id="desc" className='w-100' value={desc} onChange={handleChange}></textarea>
            </div>
            <div className='d-grid gap-2'>
                <button type='submit' className='btn btn-sm btn-primary'>Submit</button>

            </div>
        </form>
        <hr />      
    </div>
  )
}

export default NewTodo
