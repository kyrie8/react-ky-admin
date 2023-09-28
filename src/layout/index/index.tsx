import React, { Suspense } from 'react'
import { Layout, Spin, theme } from 'antd'
import MySider from '../component/sider'
import Footer from '../component/footer'
import MyHeader from '../component/header'
import MyBreadcrumb from '../component/breadcrumb'
import { Outlet } from 'react-router-dom'
const { Content } = Layout

import styles from './index.module.scss'
import AuthRouter from '@/router/authRouter'

const App: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <MySider></MySider>
      <Layout>
        <Suspense
          fallback={
            <div className={styles['page-loading-wrap']}>
              <Spin size="large" />
            </div>
          }
        >
          <MyHeader />
          <Content style={{ margin: '0 16px' }}>
            <MyBreadcrumb></MyBreadcrumb>
            <div
              style={{
                padding: 24,
                background: colorBgContainer
              }}
            >
              <AuthRouter>
                <Outlet></Outlet>
              </AuthRouter>
            </div>
          </Content>
        </Suspense>
        <Footer></Footer>
      </Layout>
    </Layout>
  )
}

export default App
