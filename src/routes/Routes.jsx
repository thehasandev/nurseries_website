import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import RouteLayouts from '../components/RouteLayouts';
import ProductDeteails from '../pages/ProductDeteails';
import Error from '../pages/Error';
import Blog from '../pages/Blog';
import Loging from '../pages/Loging';
import SingUp from '../pages/SingUp';
import TrmasAndCondition from '../pages/TrmasAndCondition';
import About from '../pages/About';
import Contact from '../pages/Contact';

import GallaryForFurniture from '../pages/GallaryForFurniture';
import GallaryForTree from '../pages/GallaryForTree';

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
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/trams-condition",
          element: <TrmasAndCondition />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/furniture-gallary",
          element: <GallaryForFurniture />,
        },
        {
          path: "/tree-gallary",
          element: <GallaryForTree />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/log-in",
          element: <Loging />,
        },
        
        {
          path: "/sing-up",
          element: <SingUp />,
        },
        
        {
          path: "/*",
          element: <Error/>,
        },
      ],
    },
  ]);

export default Routes