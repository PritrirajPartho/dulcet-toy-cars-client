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



// router is below ......................
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <div>hello i can setup this assignment</div>,
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
