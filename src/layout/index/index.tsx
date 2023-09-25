import React, { Suspense } from 'react'
import { Layout, theme } from 'antd'
import MySider from '../sider'
import Footer from '../footer'
import MyBreadcrumb from '../breadcrumb'
import { Outlet } from 'react-router-dom'
import Loading from '../loading'
const { Header, Content } = Layout

const App: React.FC = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout>
      <MySider></MySider>
      <Layout>
        <Suspense fallback={<Loading></Loading>}>
          <Header style={{ padding: 0, background: colorBgContainer }} />
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
