import React, { Component, Fragment } from "react";
import TopNavigation from "../topNavigtion/TopNavigation";
import TopPage from "../TopPage/TopPage";
import TermsCondition from "../TermsCondition/TermsCondition";
import Footer from "../Footer/Footer";

export class TermsConditionPage extends Component {
   componentDidMount() {
    window.scroll(0, 0);
  }
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
