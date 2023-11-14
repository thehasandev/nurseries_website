import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RouteLayouts from '../components/RouteLayouts';
import ProductDeteails from '../pages/ProductDeteails';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <RouteLayouts />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product-details",
          element: <ProductDeteails />,
        },
      ],
    },
  ]);

export default Routes