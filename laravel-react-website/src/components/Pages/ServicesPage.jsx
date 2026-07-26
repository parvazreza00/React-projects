import React, { Component, Fragment } from 'react'
import TopNavigation from '../topNavigtion/TopNavigation'
import TopPage from '../TopPage/TopPage'
import Services from '../services/Services'
import Footer from '../Footer/Footer'

export class ServicesPage extends Component {
   componentDidMount() {
    window.scroll(0, 0);
  }
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
