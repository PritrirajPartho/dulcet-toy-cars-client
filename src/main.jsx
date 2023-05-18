import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Root from './Layout/Root/Root';
import Registraion from './pages/Registration/Registraion';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './pages/login/Login';



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
