import useUserInfo from '@/store/userUserInfo'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { message } from 'antd'

import WhiteRouter from './whiteRouter'
interface IProps {
  children: JSX.Element
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
        setTimeout(() => {
          navigate(path.pathname)
        }, 2000)
      } else {
        navigate('/login')
      }
    } else {
      // const is = true
      // if (is) {
      //   message.error('无权访问', 3)
      //   navigate(-1)
      //   return
      // }
      navigate(path.pathname)
    }
  }, [path.pathname])
  return children
}

export default AuthRouter
