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

const Layout = () => {
  return (
    <>
      <Navbar />
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
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  }
])

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}