import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import ContactUs from './pages/contactUs';
import NotFound from './pages/notFound';
import Search from './pages/search/search';
import Boom from './pages/boom/boom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/contactUs',
        element: <ContactUs />
      }, {
        path: '/search',
        element: <Search />
      }, {
        path: '/boom',
        element: <Boom/>
      }, {
        path: '/scissors',
        element: <Scissors/>
      }, {
        path: '/spider',
        element: <Spider />
      }, {
        path: '/mount',
        element: <Mount />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

