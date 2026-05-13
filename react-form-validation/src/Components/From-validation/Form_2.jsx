import React from 'react'

const Form_2 = () => {
  return (
    <div className='container m-auto w-50'>
        <h2 className='py-3 text-center bg-success text-white'>Registration Form</h2>
        <form action="">
            <div className='mb-3'>
                <label htmlFor="fname">First Name</label>
                <input type="text" className='form-control' name="fname" id="fname" placeholder='Enter First Name' />
            </div>
            <div className='mb-3'>
                <label htmlFor="lname">Last Name</label>
                <input type="text" className='form-control' name="lname" id="lname" placeholder='Enter Last Name' />
            </div>
            <div className='mb-3'>
                <label htmlFor="username">User Name</label>
                <input type="text" className='form-control' name="username" id="username" placeholder='Enter User Name' />
            </div>
            <div className='mb-3'>
                <label htmlFor="address">Address</label>
                <input type="text" className='form-control' name="address" id="address" placeholder='Enter Address' />
            </div>
            <div className='mb-3'>
                <label htmlFor="phone">Phone</label>
                <input type="number" className='form-control' name="phone" id="phone" placeholder='Enter Phone ' />
            </div>
            <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' name="email" id="email" placeholder='Enter Email ' />
            </div>
            <div className='mb-3'>
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' name="password" id="password" placeholder='Enter Password' />
            </div>
            <div className='mb-3 d-grid '>                
                <button className='btn btn-primary px-4'>Register</button>
            </div>
        </form>
      
    </div>
  )
}

export default Form_2
