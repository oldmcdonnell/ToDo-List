import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// import React, { createContext, useReducer, useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet,
// } from 'react-router-dom'

// // project styles
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'

// import App from './App'
// import Header from './Header'
// import Footer from './Footer'

// function Layout() {
//   return (
//       <>
//         <Header />
//         <div id='page-content'>
//           <Outlet />
//         </div>
//         <Footer />
//       </>
//   )
// }

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <App />,
//         errorElement: <ErrorPage />
//       },
//     ]
//   }
// ])


// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <RouterProvider router={router} />
// <App />
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)