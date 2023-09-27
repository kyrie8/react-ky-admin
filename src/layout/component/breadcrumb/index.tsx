import useUserInfo from '@/store/userUserInfo'
import { Breadcrumb } from 'antd'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import type { IMenu } from '@/mock'
import { useTranslation } from 'react-i18next'
import useUserCustomStore from '@/store/useUserCustom'
import { TFunction } from 'i18next'

function getBread(
  t: TFunction<'translation', undefined>,
  path: string,
  menuList: IMenu
) {
  const bread: { title: any }[] = []
  function flattenBread(_breadList: IMenu) {
    _breadList.forEach((item) => {
      if (path.indexOf(item.path) !== -1) {
        bread.push({ title: t(item.name) })
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
  const { t } = useTranslation()
  const { language } = useUserCustomStore()
  const path = useLocation()
  const breadArr = useMemo(
    () => getBread(t, path.pathname, menuList),
    [path.pathname, menuList, language]
  )

  return <Breadcrumb style={{ margin: '16px 0' }} items={breadArr}></Breadcrumb>
}
export default MyBreadcrumb
