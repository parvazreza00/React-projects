import React, { useRef, useState } from 'react'

const UseReff = () => {
    const nameRef = useRef();
    const passwordRef = useRef();

    const handleForm = (event)=> {
        event.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        nameRef.current.style.color = "red";
        console.log({name, password});
    }
    
  return (
    <div className='container mt-4'>
        <h3>useRef() Hook example</h3>

        <form action="" onSubmit={handleForm}>
            <div className='mb-3'>
                <label htmlFor="">User Name </label>
                <input type="text" name='username' id="username" ref={nameRef}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="">User password </label>
                <input type="password" name='password' id="password" ref={passwordRef} />
            </div>
            <div>
                <button className='btn btn-primary' type='submit'>Register</button>
            </div>
        </form>

      
    </div>
  )
}

export default UseReff
