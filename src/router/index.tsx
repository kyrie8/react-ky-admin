import { lazy } from 'react'
import WhiteRouter from './whiteRouter'
import { createBrowserRouter } from 'react-router-dom'
const Layout = lazy(() => import('../layout/index'))
const Login = lazy(() => import('../view/login/index.tsx'))
const NotFound = lazy(() => import('@/view/notFound'))

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
