import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/about.jsx'
import Rooms from './components/Rooms.jsx'
import Login from './components/Login.jsx'
import Contactus from './components/Contactus.jsx'
import Signup from './components/Signup.jsx'
import Postproperty from './assets/Postproperty.jsx'
import ProfileSection from './profileComponents/ProfileSection.jsx'
import Roomoverview from './assets/Roomoverview.jsx'
import Myproperties from './profileComponents/MyProperties.jsx'
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
          path: "/",
          element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/rooms",
        element: <Rooms />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/contactus",
        element: <Contactus />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/postproperty",
        element: <Postproperty />
      },
      {
        path: "/profile",
        element: <ProfileSection />
      },
      {
        path: "/roomsoverview",
        element: <Roomoverview />
      },
      {
        path: "/manageproperties",
        element: <Myproperties />
      }
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
)