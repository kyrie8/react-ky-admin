import useUserInfo from '@/store/userUserInfo'
import React, { useEffect } from 'react'
import {
  RouteObject,
  useLocation,
  useNavigate,
  useRoutes
} from 'react-router-dom'
import { message } from 'antd'

import WhiteRouter from './whiteRouter'
interface IProps {
  router: RouteObject[]
}

function findRoutePath(routes: RouteObject[], path: string) {
  for (const val of routes) {
    if (val.path === path) {
      return true
    }
    if (val.children && val.children.length) {
      return findRoutePath(val.children, path)
    }
  }
  return null
}

const AuthRouter: React.FC<IProps> = (props: IProps) => {
  const { router } = props
  const { token } = useUserInfo()
  const path = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (path.pathname === '/login') {
      navigate(path.pathname)
      return
    }
    if (!token) {
      const hasWhite = WhiteRouter.some((item) => item.path === path.pathname)
      if (hasWhite) {
        navigate(path.pathname)
      } else {
        navigate('/login')
      }
    } else {
      const hasPath = findRoutePath(router, path.pathname)
      if (hasPath) {
        navigate(path.pathname)
      } else {
        navigate('/404')
      }
    }
  }, [path.pathname])
  return useRoutes(router)
}

export default AuthRouter
