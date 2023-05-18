import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/category/:id",
    element: <ItemListContainer/>,
  },
  {
    path: "/item/:id",
    element: <ItemDetailContainer/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

