
import {createBrowserRouter, RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import SubCategory from './views/subcategorypage.jsx'
import Home from './views/homepage.jsx'
import NotFound from './views/notfound.jsx'
import ChildCategory from './views/childCategoryPage.jsx'
import GrandChildCategory from './views/grandchildcatetorypage.jsx'
import DishDetail from './views/dishdetailpage.jsx'
import Search from './views/searchPage.jsx'

const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'*',element:<NotFound/>},
  {path:'/search',element:<Search/>},
  {path:'/subcategory',element:<SubCategory/>},
  {path:'/childcategory',element:<ChildCategory/>},
  {path:'/grandchildcategory',element:<GrandChildCategory/>},
  {path:'/dish',element:<DishDetail/>},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
