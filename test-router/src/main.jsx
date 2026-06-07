import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import SignIn from "./components/pages/SignIn";
import NotFoundPage from "./components/pages/NotFoundPage";
import Navbar from "./components/layout/Navbar";
import ProductDetails from "./components/pages/ProductDetails";
import UserProfile from "./components/pages/users/UserProfile";
import UserProtectRouter from "./router/UserProtectRouter";
import UserOrder from "./components/pages/users/UserOrder";
import Profile from "./components/pages/admin/Profile";
import UserManage from "./components/pages/admin/UserManage";
import AdminUserProtectRouter from "./router/AdminUserProtectRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },

      {
        path: "/dashboar/user",
        element: <UserProtectRouter />,
        children: [
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "orders",
            element: <UserOrder />,
          },
        ],
      },

       {
        path: "/dashboar/admin",
        element: <AdminUserProtectRouter />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "manage-user",
            element: <UserManage />,
          },
        ],
      },

    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
