import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/ShareComponents/Header/Header'

const Root = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <footer>Footer part</footer>
      
    </div>
  )
}

export default Root

