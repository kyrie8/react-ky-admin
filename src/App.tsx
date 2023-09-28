// import { useEffect } from 'react'

import { Suspense, lazy, useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import type { Locale } from 'antd/es/locale'
import zhCN from 'antd/locale/zh_CN'
import Loading from './layout/component/loading'

import useUserCustomStore from './store/useUserCustom'
import useUserInfo from './store/userUserInfo'

import router from './router'

import { getFlattenRoutes, module, languageORM } from './utils'

function App() {
  const { color } = useUserCustomStore()
  const { menuList } = useUserInfo()
  const { language } = useUserCustomStore()
  const [loading, setLoading] = useState(true)
  const [locale, setLocal] = useState<Locale>(zhCN)
  useEffect(() => {
    const res = getFlattenRoutes(menuList)
    router.routes[0].children = res.map(
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
  // if (loading) {
  //   return <Loading></Loading>
  // }
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
        <RouterProvider router={router}></RouterProvider>
      )}
    </ConfigProvider>
  )
}

export default App
