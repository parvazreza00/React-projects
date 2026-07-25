import React, { Component, Fragment } from 'react'
import TopNavigation from '../topNavigtion/TopNavigation'
import TopPage from '../TopPage/TopPage'
import CourseDetails from '../CourseDetails/CourseDetails'
import Footer from '../Footer/Footer'

export class CourseDetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Courese Details"/>
        <TopPage pageTitle="Course Details"/>
        <CourseDetails/>
        <Footer/>        
      </Fragment>
    )
  }
}

export default CourseDetailsPage
