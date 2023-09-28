import useUserInfo from '@/store/userUserInfo'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { message } from 'antd'

import WhiteRouter from './whiteRouter'
interface IProps {
  children: React.ReactNode
}

const AuthRouter: React.FC<IProps> = (props: IProps) => {
  const { children } = props
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
      navigate(path.pathname)
    }
  }, [path.pathname])
  return children
}

export default AuthRouter
