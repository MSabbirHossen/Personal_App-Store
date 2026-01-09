import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from "../../components/Root/Root";
import Home from '../../components/Home/Home';
import Error404 from '../Error/Error404';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error404/>,
    children: [
      {index: true, Component: Home},
    
    ]
  },
]);