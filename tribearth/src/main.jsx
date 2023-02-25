import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Vegancafe from './pages/Vegancafe'
import Artisan from './pages/Artisan'
import Impact from './pages/Impact'
import Shop from './pages/Shop'
import Story from './pages/Story'
import Contact from './pages/Contact'
import Cart from './pages/Cart'


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Artisans from './pages/Artisan'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Vegancafe",
    element: <Vegancafe />,
  },
  {
    path: "Artisan",
    element: <Artisan />,
  },
  {
    path: "Impact",
    element: <Impact />,
  },
  {
    path: "Shop",
    element: <Shop />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Story",
    element: <Story />,
  },
  {
    path: "Cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


