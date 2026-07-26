import React, { Component, Fragment } from "react";
import TopNavigation from "../topNavigtion/TopNavigation";
import TopPage from "../TopPage/TopPage";
import AboutDescription from "../AboutDescription/AboutDescription";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";

export class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="About Us"/>
        <TopPage pageTitle="About Us"/>
        <AboutMe/>
        <AboutDescription/>
        <Footer/>
      </Fragment>
    );
  }
}

export default AboutPage;
