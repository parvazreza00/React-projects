import React, { Component, Fragment } from 'react'
import TopNavigation from '../topNavigtion/TopNavigation'
import TopPage from '../TopPage/TopPage'
import Services from '../services/Services'
import Footer from '../Footer/Footer'

export class ServicesPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Services"/>
        <TopPage pageTitle="Our Services"/>
        <Services/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ServicesPage
