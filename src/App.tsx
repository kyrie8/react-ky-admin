// import { useEffect } from 'react'

import { Suspense, lazy, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Loading from './layout/loading'

import useUserCustomStore from './store/useUserCustom'
import useUserInfo from './store/userUserInfo'

import router from './router'

import { getFlattenRoutes, module } from './utils'

function App() {
  const { color } = useUserCustomStore()
  const { menuList } = useUserInfo()
  useEffect(() => {
    const res = getFlattenRoutes(menuList)
    router.routes[0].children = res.map(
      (item) =>
        ({
          path: item.path,
          Component: lazy(module[`../${item.element}.tsx`] as any)
        }) as any
    )
  }, [menuList])
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color
        }
      }}
    >
      <Suspense fallback={<Loading></Loading>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </ConfigProvider>
  )
}

export default App
