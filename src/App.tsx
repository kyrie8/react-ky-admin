// import { useEffect } from 'react'

import { lazy, useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import type { Locale } from 'antd/es/locale'
import zhCN from 'antd/locale/zh_CN'
import Loading from './layout/component/loading'

import useUserCustomStore from './store/useUserCustom'
import useUserInfo from './store/userUserInfo'

import router from './router'

import { getFlattenRoutes, module, languageORM } from './utils'
import AuthRouter from './router/authRouter'

function App() {
  const { color } = useUserCustomStore()
  const { menuList } = useUserInfo()
  const { language } = useUserCustomStore()
  const [loading, setLoading] = useState(true)
  const [locale, setLocal] = useState<Locale>(zhCN)
  useEffect(() => {
    const res = getFlattenRoutes(menuList)
    router[0].children = res.map(
      (item) =>
        ({
          path: item.path,
          Component: lazy(module[`../${item.element}.tsx`] as any)
        }) as any
    )
    setLoading(false)
  }, [menuList])
  useEffect(() => {
    setLocal(languageORM[language])
  }, [language])
  const element = useRoutes(router)
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color
        }
      }}
      locale={locale}
    >
      {loading ? (
        <Loading></Loading>
      ) : (
        <AuthRouter>
          <>{element}</>
        </AuthRouter>
      )}
    </ConfigProvider>
  )
}

export default App
