import { useState } from 'react'
import './App.css'
import Countries from './components/countryApp/Countries'
import Countries_2 from './components/countryApp_2/Countries'

function App() {

  return (
   <div className='container'>
    {/* <Countries/> */}
    <Countries_2 />
   </div>
  )
}

export default App
