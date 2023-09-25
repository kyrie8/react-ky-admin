import useUserInfo from '@/store/userUserInfo'
import { Breadcrumb } from 'antd'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import type { IMenu } from '@/mock'

function getBread(path: string, menuList: IMenu) {
  const bread: { title: any }[] = []
  function flattenBread(_breadList: IMenu) {
    _breadList.forEach((item) => {
      if (path.indexOf(item.path) !== -1) {
        bread.push({ title: item.name })
        if (item.children && item.children.length) {
          flattenBread(item.children)
        }
      }
    })
  }
  flattenBread(menuList)
  return bread
}

const MyBreadcrumb: React.FC = () => {
  const { menuList } = useUserInfo()
  const path = useLocation()
  const breadArr = useMemo(
    () => getBread(path.pathname, menuList),
    [path.pathname, menuList]
  )

  return <Breadcrumb style={{ margin: '16px 0' }} items={breadArr}></Breadcrumb>
}
export default MyBreadcrumb
