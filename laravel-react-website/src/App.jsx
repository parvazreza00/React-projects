import React from 'react'
import TopBanner from './components/topBanner/TopBanner'
import Services from './components/services/Services'
import TopNavigation from './components/topNavigtion/TopNavigation'
import Analysis from './components/Analysis/Analysis'
import Summery from './components/summery/Summery'
import RecentProject from './components/RecentProject/RecentProject'
import Courses from './components/Courses/Courses'
import Videos from './components/Video/Videos'
import ClientReview from './components/ClientReview/ClientReview'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'


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
    <Videos/>
    <ClientReview/>
    <AboutMe/>
    <Footer/>
    

   </div>
  )
}

export default App
