import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


