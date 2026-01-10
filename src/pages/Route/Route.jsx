import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../components/Root/Root";
import Home from "../../components/Home/Home";
import Error404 from "../Error/Error404";
import AllApps from "../AllApps/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        loader: () => fetch("appsData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("appsData.json"),
        Component: AllApps,
      },
    ],
  },
]);
