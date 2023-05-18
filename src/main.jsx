import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Root from './Layout/Root/Root';



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
