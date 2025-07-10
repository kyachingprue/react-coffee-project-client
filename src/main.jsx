import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePages from './pages/HomePages';
import AddCoffee from './pages/AddCoffee';
import UpdateCoffee from './pages/UpdateCoffee';
import ErrorPages from './pages/ErrorPages';
import CoffeeDetails from './components/CoffeeDetails';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import Users from './components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages></HomePages>,
    loader: () => fetch('http://localhost:5000/coffees')
  },
  {
    path: "addCoffees",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "updateCoffees/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path: "coffeeDetails/:id",
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: "*",
    element: <ErrorPages></ErrorPages>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
