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
import RecipeDetails from './pages/RecipeDetails/RecipeDetails.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import PrivateRoute from './context/PrivateRoute.jsx'
import Loader from './pages/Loader/Loader.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import FaQ from './pages/FaQ/FaQ.jsx'
import About from './pages/About/About.jsx'
import Terms from './pages/Terms/Terms.jsx'
import Privacy from './pages/Privacy/Privacy.jsx'
import DashBoardLayout from './layout/DashBoardLayout.jsx'
import DashboardHome from './pages/DashboardHome/DashboardHome.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        loader: () => fetch('https://recipe-book-server-kohl-five.vercel.app/recipes'),
        element: <Home></Home>,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "allrecipe",
        loader: () => fetch('https://recipe-book-server-kohl-five.vercel.app/recipes'),
        element: <AllRecipe></AllRecipe>,
        hydrateFallbackElement: <Loader></Loader>
      }, 
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "recipeDetails/:id",
        loader: () => fetch('https://recipe-book-server-kohl-five.vercel.app/recipes'),
        element: <PrivateRoute>
          <RecipeDetails></RecipeDetails>
        </PrivateRoute>,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: 'faq',
        element: <FaQ></FaQ>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'terms',
        element: <Terms></Terms>
      },
      {
        path: 'privacy',
        element: <Privacy></Privacy>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute>
      <DashBoardLayout></DashBoardLayout>
    </PrivateRoute>,
    children:[
      {
        index: true,
        loader: () => fetch('https://recipe-book-server-kohl-five.vercel.app/recipes'),
        element: <PrivateRoute>
          <DashboardHome></DashboardHome>
        </PrivateRoute>
      },
      {
        path: "dashboard/myrecipe",
        loader: () => fetch('https://recipe-book-server-kohl-five.vercel.app/recipes'),
        element: <PrivateRoute>
          <MyRecipe></MyRecipe>
        </PrivateRoute>,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "dashboard/addrecipe",
        element: <PrivateRoute>
          <AddRecipe></AddRecipe>
        </PrivateRoute>,
        hydrateFallbackElement: <Loader></Loader>
      },
      {
        path: "dashboard/allrecipe",
        loader: () => fetch('https://recipe-book-server-kohl-five.vercel.app/recipes'),
        element: <PrivateRoute>
          <AllRecipe></AllRecipe>
          </PrivateRoute>,
        hydrateFallbackElement: <Loader></Loader>
      }, 
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
