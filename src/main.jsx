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
    path: "*",
    element: <ErrorPages></ErrorPages>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
