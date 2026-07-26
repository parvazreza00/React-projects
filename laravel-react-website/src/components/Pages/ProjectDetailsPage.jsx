import React, { Component, Fragment } from 'react'
import TopNavigation from '../topNavigtion/TopNavigation'
import TopPage from '../TopPage/TopPage'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import Footer from '../Footer/Footer'

export class ProjectDetailsPage extends Component {
   componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Project Details"/>
        <TopPage pageTitle="Project Details"/>
        <ProjectDetails/>
        <Footer/>        
      </Fragment>
    )
  }
}

export default ProjectDetailsPage
