import React from "react";
import PropTypes from "prop-types";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Home/MainLayout";
import Home from "../Home/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/Login";
import ServiceDetails from "../Private/ServiceDetails";
import PrivateRoute from "../Private/PrivateRoute";
import Gallery from "../Pages/Gallery";
import OurSpeakers from "../Private/OurSpeakers";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/gallery",
        loader: () => fetch("/services.json"),
        element: (
          <PrivateRoute>
            <Gallery></Gallery>
          </PrivateRoute>
        ),
      },
      {
        path: "/speakers",
        loader: () => fetch("/speakers.json"),
        element: (
          <PrivateRoute>
            <OurSpeakers></OurSpeakers>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

router.propTypes = {};

export default router;
