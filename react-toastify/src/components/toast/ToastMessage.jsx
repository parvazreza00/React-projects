import React from 'react'
  import { ToastContainer, toast } from 'react-toastify';

const ToastMessage = () => {
    const handleTodo = () => {
        toast("New todo added");
    }
  return (
    <div>

        <h2>React toastify message</h2>
        <div>
            <button onClick={handleTodo}>Add todo</button>
        </div>
        <ToastContainer/>
      
    </div>
  )
}

export default ToastMessage
