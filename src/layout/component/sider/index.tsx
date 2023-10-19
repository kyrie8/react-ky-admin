import React, { useMemo, useState } from 'react'
import * as Icons from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import Logo from '../logo'
import useUserInfo from '@/store/userUserInfo'

import type { IMenu } from '@/mock'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import useUserCustomStore from '@/store/useUserCustom'
type IIcons = {
  [key: string]: unknown
}
type MenuItem = Required<MenuProps>['items'][number]

const { Sider } = Layout

function getMenus(t: TFunction<'translation', undefined>, menuList: IMenu) {
  const res: MenuItem[] = []
  menuList.forEach((item) => {
    const Icon = (Icons as IIcons)[item.icon]
    if (!item.isHidden) {
      res.push({
        key: item.path,
        label: item.isOutLink ? (
          <a href={item.path} target="_blank" rel="noreferrer">
            {t(item.name)}
          </a>
        ) : (
          t(item.name)
        ),
        icon: React.createElement(Icon as string),
        children:
          item.children && item.children.length
            ? [...getMenus(t, item.children)]
            : undefined
      })
    }
  })
  return res
}

function getSelectedKey(path: string) {
  const pathArr = path.slice(1).split('/')
  console.log('234', pathArr)
  const res = []
  if (pathArr.length > 1) {
    for (let index = 0; index < pathArr.length - 1; index++) {
      res.push('/' + pathArr[index])
    }
  }
  return res
}

const MySider: React.FC = () => {
  const { t } = useTranslation()
  const { language } = useUserCustomStore()
  const navigate = useNavigate()
  const path = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const { menuList } = useUserInfo()
  const menu: MenuItem[] = useMemo(
    () => getMenus(t, menuList),
    [menuList, language]
  )
  const [defaultSelectedKeys] = useState<string[]>([path.pathname])
  const defaultOpenKeys = useMemo(() => getSelectedKey(path.pathname), [])

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    console.log('key', key)
    navigate(key)
  }

  return (
    <Sider
      theme="dark"
      style={{ height: '100vh' }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Logo collapsed={collapsed}></Logo>
      <Menu
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={defaultSelectedKeys}
        onClick={handleMenuClick}
        mode="inline"
        items={menu}
        theme="dark"
      />
    </Sider>
  )
}

export default MySider
