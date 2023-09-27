import React, { Suspense } from 'react'
import { Layout, theme } from 'antd'
import MySider from '../component/sider'
import Footer from '../component/footer'
import MyHeader from '../component/header'
import MyBreadcrumb from '../component/breadcrumb'
import { Outlet } from 'react-router-dom'
import Loading from '../component/loading'
const { Content } = Layout

const App: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <MySider></MySider>
      <Layout>
        <Suspense fallback={<Loading></Loading>}>
          <MyHeader />
          <Content style={{ margin: '0 16px' }}>
            <MyBreadcrumb></MyBreadcrumb>
            <div
              style={{
                padding: 24,
                background: colorBgContainer
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
        </Suspense>
        <Footer></Footer>
      </Layout>
    </Layout>
  )
}

export default App
