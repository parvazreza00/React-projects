import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import HomePage from "./components/Pages/HomePage.jsx";
import AboutPage from "./components/Pages/AboutPage.jsx";
import ServicesPage from "./components/Pages/ServicesPage.jsx";
import CoursePage from "./components/Pages/CoursePage.jsx";
import PortfolioPage from "./components/Pages/PortfolioPage.jsx";
import ContactPage from "./components/Pages/ContactPage.jsx";
import RefundPage from "./components/Pages/RefundPage.jsx";
import TermsConditionPage from "./components/Pages/TermsConditionPage.jsx";
import PrivacyPolicyPace from "./components/Pages/PrivacyPolicyPace.jsx";

const router = createBrowserRouter([
   {
    path: "/",
    element: <App/>,
    children:[
      {index: true, element: <HomePage/> },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "service",
        element: <ServicesPage />,
      },
      {
        path: "courses",
        element: <CoursePage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "refund-policy",
        element: <RefundPage />,
      },
      {
        path: "terms-conditions",
        element: <TermsConditionPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPace />,
      },
      
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
