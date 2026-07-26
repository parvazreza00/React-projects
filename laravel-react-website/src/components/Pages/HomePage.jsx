import React, { Component } from "react";

import TopBanner from "../../components/topBanner/TopBanner";
import Services from "../../components/services/Services";
import TopNavigation from "../../components/topNavigtion/TopNavigation";
import Analysis from "../../components/Analysis/Analysis";
import Summery from "../../components/summery/Summery";
import RecentProject from "../../components/RecentProject/RecentProject";
import Courses from "../../components/Courses/Courses";
import Videos from "../../components/Video/Videos";
import ClientReview from "../../components/ClientReview/ClientReview";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
import WelcomeTo from "../WelcomeSection/WelcomeTo";

export class HomePage extends Component {
   componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div>
        <TopNavigation title="Home Page"/>
        <TopBanner />
        <WelcomeTo/>
        <Services />
        <Analysis />
        <Summery />
        <RecentProject />
        <Courses />
        <Videos />
        <ClientReview />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
