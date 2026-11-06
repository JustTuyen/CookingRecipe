
import {createBrowserRouter, RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Category from './views/categorypage.jsx'
import Home from './views/homepage.jsx'
import NotFound from './views/notfound.jsx'



const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'*',element:<NotFound/>},
  {path:'/news',element:<Category/>},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
