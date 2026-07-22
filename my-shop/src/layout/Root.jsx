import React from 'react'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
        <h2>Navbar here</h2>
        <Outlet/>
        <footer>Footer part</footer>
      
    </div>
  )
}

export default Root

