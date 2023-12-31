import React, { Suspense } from 'react'
import { Layout, Spin, theme } from 'antd'
import MySider from '../component/sider'
import Footer from '../component/footer'
import MyHeader from '../component/header'
import MyBreadcrumb from '../component/breadcrumb'
import { Outlet } from 'react-router-dom'
const { Content } = Layout

import styles from './index.module.scss'

const App: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <MySider></MySider>
      <Layout className={styles['layout-wrap']}>
        <MyHeader />
        <Content style={{ margin: '0 16px' }}>
          <MyBreadcrumb></MyBreadcrumb>
          <div
            style={{
              padding: 24,
              background: colorBgContainer
            }}
          >
            <Suspense
              fallback={
                <div className={styles['page-loading-wrap']}>
                  <Spin size="large" />
                </div>
              }
            >
              <Outlet></Outlet>
            </Suspense>
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  )
}

export default App
