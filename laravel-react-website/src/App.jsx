import React from 'react'
import TopBanner from './components/topBanner/TopBanner'
import Services from './components/services/Services'
import TopNavigation from './components/topNavigtion/TopNavigation'
import Analysis from './components/Analysis/Analysis'
import Summery from './components/summery/Summery'


function App() {


  return (
   <div>

    <TopNavigation/>
    <TopBanner/>
    <Services/>
    <Analysis/>
    <Summery/>
    

   </div>
  )
}

export default App
