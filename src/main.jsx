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



const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path:"/" ,
          element:<Home></Home>,
          loader:()=> fetch('https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json')
        },
       { 
        path:"/review",
        element:<OrderReview></OrderReview>
      },
      
    ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
