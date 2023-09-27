import React, { memo, useCallback, useState } from 'react'
import type { MenuProps } from 'antd'
import { Avatar, Dropdown, Layout, Space } from 'antd'
const { Header } = Layout
import MySettingDrawer from '../settingDrawer'

import styles from './index.module.scss'
import { TranslationOutlined, UserOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import useUserCustomStore from '@/store/useUserCustom'

const languagesItems: MenuProps['items'] = [
  {
    label: 'cn 简体中文',
    key: 'zhCN'
  },
  {
    label: 'us English英文',
    key: 'enUS'
  }
]

const MyHeader: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { setLanguage } = useUserCustomStore()
  const [open, setOpen] = useState(false)
  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case '1':
        setOpen(true)
        break
      case 'zhCN':
      case 'enUS':
        setLanguage(key)
        i18n.changeLanguage(key)
        break
      default:
        break
    }
  }
  const items: MenuProps['items'] = [
    {
      label: t('个人中心'),
      key: '0'
    },
    {
      label: t('设置'),
      key: '1'
    },
    {
      type: 'divider'
    },
    {
      label: t('退出'),
      key: '3'
    }
  ]
  const handleCloseDrawer = useCallback(
    (v: boolean) => {
      setOpen(v)
    },
    [open]
  )
  return (
    <Header className={styles['header-wrap']}>
      <div className={styles.right}>
        <div>
          <Dropdown
            destroyPopupOnHide
            menu={{ items: languagesItems, onClick: handleMenuClick }}
          >
            <TranslationOutlined className={styles['right-languages-icon']} />
          </Dropdown>
        </div>
        <div>
          <Dropdown
            destroyPopupOnHide
            menu={{ items, onClick: handleMenuClick }}
          >
            <Space wrap size={8} className={styles['right-space']}>
              <Avatar icon={<UserOutlined />} />
              <span>admin</span>
            </Space>
          </Dropdown>
        </div>
      </div>
      <MySettingDrawer
        setOpen={handleCloseDrawer}
        open={open}
      ></MySettingDrawer>
    </Header>
  )
}

export default memo(MyHeader)
