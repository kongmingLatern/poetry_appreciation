import Headers from '@/components/Headers'
import AdminSider from '@/views/admin/Sider'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout

export default function Admin() {
  return (
    <>
      <Layout>
        <Header>
          <Headers />
        </Header>
        <Layout>
          <Sider>
            <AdminSider />
          </Sider>
          <Content style={{ backgroundColor: 'white' }}>
            <Outlet />
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </>
  )
}
