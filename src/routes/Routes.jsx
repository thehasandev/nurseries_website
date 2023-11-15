import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RouteLayouts from '../components/RouteLayouts';
import ProductDeteails from '../pages/ProductDeteails';
import Error from '../pages/Error';

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
        {
          path: "/*",
          element: <Error/>,
        },
      ],
    },
  ]);

export default Routes