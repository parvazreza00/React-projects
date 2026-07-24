import React, { Component, Fragment } from "react";
import TopNavigation from "../topNavigtion/TopNavigation";
import TopPage from "../TopPage/TopPage";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import Footer from "../Footer/Footer";

export class PrivacyPolicyPace extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Privacy Policy" />
        <TopPage pageTitle="Privacy Policy" />
        <PrivacyPolicy />
        <Footer />
      </Fragment>
    );
  }
}

export default PrivacyPolicyPace;
