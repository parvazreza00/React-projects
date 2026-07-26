import React, { Component, Fragment } from 'react'
import TopNavigation from '../topNavigtion/TopNavigation'
import TopPage from '../TopPage/TopPage'
import Footer from '../Footer/Footer'
import AllProject from '../AllProject/AllProject'

export class PortfolioPage extends Component {
   componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Portfolio"/>
        <TopPage pageTitle="Our Portfolio"/>
        <AllProject/>
        <Footer/>
      </Fragment>
    )
  }
}

export default PortfolioPage
