import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Ingredient from './pages/Ingredient.jsx'
import Home from "./pages/Home.jsx"
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/ingredients",
            element:<Ingredient/>
        },
    ],
    errorElement:<Error/>
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
