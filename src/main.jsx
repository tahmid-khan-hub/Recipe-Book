import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllRecipe from './pages/AllRecipe/AllRecipe.jsx'
import AddRecipe from './pages/AddRecipe/AddRecipe.jsx'
import MyRecipe from './pages/MyRecipe/MyRecipe.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayout from './layout/HomeLayout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        loader: () => fetch('http://localhost:3000/recipes'),
        element: <Home></Home>,
      },
      {
        path: "allrecipe",
        loader: () => fetch('http://localhost:3000/recipes'),
        element: <AllRecipe></AllRecipe>
      },
      {
        path: "addrecipe",
        element: <AddRecipe></AddRecipe>
      },
      {
        path: "myrecipe",
        element: <MyRecipe></MyRecipe>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
