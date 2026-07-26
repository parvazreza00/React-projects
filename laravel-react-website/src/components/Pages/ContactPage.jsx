import React, { Component, Fragment } from 'react'
import TopNavigation from '../topNavigtion/TopNavigation'
import TopPage from '../TopPage/TopPage'
import ContactSection from '../ContactSection/ContactSection'
import Footer from '../Footer/Footer'

export class ContactPage extends Component {
   componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Contact Us"/>
        <TopPage pageTitle="Contact Us"/>
        <ContactSection />
        <Footer/>        
      </Fragment>
    )
  }
}

export default ContactPage
