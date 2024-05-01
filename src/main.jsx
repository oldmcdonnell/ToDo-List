import React from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'


// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


import App from './App'
import Header from './Header'
import Footer from './Footer'
import ErrorPage from './ErrorPage'

function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router} />
<App />
)





// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )