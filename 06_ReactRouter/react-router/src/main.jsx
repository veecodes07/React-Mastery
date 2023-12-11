import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [{
      path: "",
      element: <Home/>
    }, 
    {}]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider/> //needs props to function */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
