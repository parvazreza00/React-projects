import React, { Component, Fragment } from 'react'
import TopNavigation from '../topNavigtion/TopNavigation'
import TopPage from '../TopPage/TopPage'
import RefundDescription from '../RefundDescription/RefundDescription'
import Footer from '../Footer/Footer'

export class RefundPage extends Component {
   componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund Policy"/>
        <TopPage pageTitle="Refund Policy"/>
        <RefundDescription/>
        <Footer/>        
      </Fragment>
    )
  }
}

export default RefundPage
