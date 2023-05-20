import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import 'react-tooltip/dist/react-tooltip.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Root from './Layout/Root/Root';
import Registraion from './pages/Registration/Registraion';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './pages/login/Login';
import AddToy from './pages/AddToy/AddToy';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AllToys from './pages/AllToys/AllToys';
import MyToys from './pages/MyToys/MyToys';
import UpdateMyToys from './pages/MyToys/UpdateMyToys';
import ToyDetails from './pages/ToyDetails/ToyDetails';
import Home from './pages/Home/Home';



// router is below ......................
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registraion></Registraion>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addtoy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/update/:id",
        element: <UpdateMyToys></UpdateMyToys>,
        loader: ({params}) => fetch(`https://toy-marketplace-server-sepia.vercel.app/toys/${params.id}`)
      },
      {
        path: "/toy/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-marketplace-server-sepia.vercel.app/toys/${params.id}`)
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
     </AuthProvider>
  </React.StrictMode>,
)
