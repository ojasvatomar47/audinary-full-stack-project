import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Footer from "./components/Footer"
import Tabbar from "./components/Tabbar"
import About from "./pages/About";
import Profile from "./pages/Profile"
import Book from "./pages/Book"

const Layout = () => {

  return (
    <>
      <Navbar />
      <Tabbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/book/:id",
        element: <Book />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
])

export default function App() {
  return (
    <div className= 'App pb-12 md:pb-0 w-auto min-h-screen bg-gradient-to-r from-grad1 to-grad3' >
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}