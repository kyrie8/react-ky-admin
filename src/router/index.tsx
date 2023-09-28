import WhiteRouter from './whiteRouter'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/index'
import Login from '../view/login/index.tsx'
import NotFound from '@/view/notFound'

const customRoutes = [
  {
    path: '/',
    Component: Layout,
    children: []
  },
  {
    path: '/login',
    Component: Login
  },
  ...WhiteRouter,
  {
    path: '*',
    Component: NotFound
  }
]

const router = createBrowserRouter(customRoutes)

export default router
