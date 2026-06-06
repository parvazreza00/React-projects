import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import NotFound from "./components/NotFound";
import Navbar from "./components/layout/Navbar";
import SingIn from "./components/pages/SingIn";
import ProductDetails from "./components/pages/ProductDetails";
import UserPorfile from "./components/pages/users/UserProfile";
import UserOrders from "./components/pages/users/UserOrders";
import ProtectedUserRoute from "./routes/ProtectedUserRoute";
import AdminProfile from "./components/pages/admin/AdminProfile";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import AdminManageUser from "./components/pages/admin/AdminManageUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },

      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/signin",
        element: <SingIn />,
      },
      {
        path: "/signout",
        element: <SingIn />,
      },

      {
        path: "/dashboard/user",
        element: <ProtectedUserRoute />,
        children: [
          {
            path: "profile",
            element: <UserPorfile />,
          },
          {
            path: "orders",
            element: <UserOrders />,
          },
        ],
      },
      {
        path: "/dashboard/admin",
        element: <ProtectedAdminRoute />,
        children: [
          {
            path: "profile",
            element: <AdminProfile />,
          },
          {
            path: "m-users",
            element: <AdminManageUser />,
          },
        ],
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
