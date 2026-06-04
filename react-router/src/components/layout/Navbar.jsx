import React from 'react'
import { Link, Outlet } from 'react-router'

const Navbar = () => {
  return (
    <div className='container'>
        <ul className=''>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="contacts">Contact</Link></li>
            <li><Link to="products">Product</Link></li>
        </ul>
        <Outlet/>
      
    </div>
  )
}

export default Navbar
