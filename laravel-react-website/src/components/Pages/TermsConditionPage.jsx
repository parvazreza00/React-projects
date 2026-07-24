import React, { Component, Fragment } from "react";
import TopNavigation from "../topNavigtion/TopNavigation";
import TopPage from "../TopPage/TopPage";
import TermsCondition from "../TermsCondition/TermsCondition";
import Footer from "../Footer/Footer";

export class TermsConditionPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms and Condition" />
        <TopPage pageTitle="Terms and Condition" />
        <TermsCondition />
        <Footer />
      </Fragment>
    );
  }
}

export default TermsConditionPage;
