import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import News from "../pages/News";
import About from "../pages/About";
import Career from "../pages/Career";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
         {
            path: '/',
            element: (
               <PrivateRoute>
                  <Navigate to={'/news/categories/08'}></Navigate>
               </PrivateRoute>
            )
         },
         {
            path: 'news/categories/:id',
            element: <News></News>,
            loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
         },
         {
            path: 'news/:newsId',
            element: <News></News>,
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.newsId}`)
         }
      ]
   },
   {
      path: '/auth',
      element: <AuthLayout></AuthLayout>,
      children: [
         {
            path: '/auth/login',
            element: <Login></Login>
         },
         {
            path: '/auth/register',
            element: <Register></Register>
         }
      ]
   },
   {
      path: '/about',
      element: <About></About>
   },
   {
      path: '/career',
      element: <Career></Career>
   },
   {
      path: '/login',
      element: <h1>Login Page</h1>
   },
   {
      path: '*',
      element: <h1>Error Page</h1>
   }
])

export default routes;