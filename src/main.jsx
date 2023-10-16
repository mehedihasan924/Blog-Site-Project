import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Component/Home/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OrderReview from './Component/OrderReview/OrderReview.jsx'
import Grendpa from './Component/Grendpa/Grendpa.jsx'


const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path:"/" ,
          element:<Home></Home>,
          loader:()=> fetch('/public/data.json')
        },
       { 
        path:"/review",
        element:<OrderReview></OrderReview>
      },
      { 
        path:"/grendpa",
        element:<Grendpa></Grendpa>
      },
      
    ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
