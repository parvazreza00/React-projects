import React from 'react'
import Menu from './Menu'
import { Outlet } from 'react-router'



const Body = () => {
  return (
    <div>
        <Outlet />      
    </div>
  )
}

export default Body
