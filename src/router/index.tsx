import WhiteRouter from './whiteRouter'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/index'
import Login from '../view/login/index.tsx'
import NotFound from '@/view/notFound'
import useUserInfo from '@/store/userUserInfo.ts'

function Redirect() {
  const { menuList } = useUserInfo()
  if (menuList && menuList.length) {
    return <Navigate to="/home" replace />
  } else {
    return <Navigate to="/login" replace />
  }
}

const customRoutes = [
  {
    Component: Layout,
    children: []
  },
  { path: '/', Component: Redirect },
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
