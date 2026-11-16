
import {createBrowserRouter, RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './views/homepage.jsx'
import NotFound from './views/notfound.jsx'
import ChildCategory from './views/categoriea/childcategorypage.jsx'
import GrandChildCategory from './views/categoriea/grandchildcatetorypage.jsx'
import DishDetail from './views/dishdetailpage.jsx'
import Search from './views/searchPage.jsx'
import Category from './views/categoriea/categorypage.jsx'
import SubCategory from './views/categoriea/subcategorypage.jsx'
import Profile from './views/profile/profilepage.jsx'


const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'*',element:<NotFound/>},
  {path:'/search',element:<Search/>},
   {path:'/category',element:<Category/>},
  {path:'/subcategory',element:<SubCategory/>},
  {path:'/childcategory',element:<ChildCategory/>},
  {path:'/grandchildcategory',element:<GrandChildCategory/>},
  {path:'/dish',element:<DishDetail/>},
  //
  {path:'/profile',element:<Profile/>},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
