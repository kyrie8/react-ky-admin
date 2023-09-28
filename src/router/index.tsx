import WhiteRouter from './whiteRouter'
import { RouteObject } from 'react-router-dom'
import Layout from '../layout/index'
import Login from '../view/login/index.tsx'
import NotFound from '@/view/notFound'

const router: RouteObject[] = [
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

export default router
