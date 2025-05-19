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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "allrecipe",
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
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
