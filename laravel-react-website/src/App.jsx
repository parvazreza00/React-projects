import React from 'react'
import TopBanner from './components/topBanner/TopBanner'
import Services from './components/services/Services'
import TopNavigation from './components/topNavigtion/TopNavigation'
import Analysis from './components/Analysis/Analysis'
import Summery from './components/summery/Summery'
import RecentProject from './components/RecentProject/RecentProject'
import Courses from './components/Courses/Courses'


function App() {


  return (
   <div>

    <TopNavigation/>
    <TopBanner/>
    <Services/>
    <Analysis/>
    <Summery/>
    <RecentProject/>
    <Courses/>
    

   </div>
  )
}

export default App
