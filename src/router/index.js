import React from "react"
import { Navigate } from 'react-router-dom'
import Home from "@/views/home"
import Demo from "@/views/demo"
// 路由懒加载
const Detail = React.lazy(() => import("@/views/detail"))
const Entire = React.lazy(() => import("@/views/entire"))
const NotFound = React.lazy(() => import("@/views/notFound"))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/detail',
    element: <Detail/>
  },
  {
    path: '/entire',
    element: <Entire/>
  },
  {
    path: '/demo',
    element: <Demo/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
]

export default routes