
import {createBrowserRouter, RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './views/homepage.jsx'
const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'*',element:<Home/>},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
