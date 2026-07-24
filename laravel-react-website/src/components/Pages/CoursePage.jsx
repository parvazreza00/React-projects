import React, { Component, Fragment } from 'react'
import TopNavigation from '../topNavigtion/TopNavigation'
import TopPage from '../TopPage/TopPage'
import AllCourses from '../AllCourses/AllCourses'
import Footer from '../Footer/Footer'

export class CoursePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="All Courses"/>
        <TopPage pageTitle="All Courses"/>
        <AllCourses/>
        <Footer/>
      </Fragment>
    )
  }
}

export default CoursePage
