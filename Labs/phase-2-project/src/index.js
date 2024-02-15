import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Restaurants from './components/Restaurants';
import Home from "./components/Home";
import SubmitReview from './components/SubmitReview';
import Reviews from './components/Reviews';
import Error from './components/Error';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Welcome />,
  //   errorElement: <Error />,
  // },
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "restaurants",
        element: <Restaurants />,
      },
      {
        path: ":name",
        element: <Restaurants />
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "submitReview",
        element: <SubmitReview />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
