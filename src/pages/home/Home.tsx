import Headers from '@/components/Headers'
import { FunctionComponent } from 'react'
import { Layout } from 'antd'
import LeftAside from '@/components/LeftAside'
import RightAside from '@/components/RightAside'
import Contents from '@/components/Contents'

const { Header, Footer, Sider, Content } = Layout

interface HomeIndexProps {}

const Home: FunctionComponent<HomeIndexProps> = () => {
  return (
    <>
      <Layout>
        <Header>
          {/* 头部 */}
          <Headers />
        </Header>
        <Layout>
          <Sider>
            <LeftAside />
          </Sider>
          <Content>
            <Contents />
          </Content>
          <Sider>
            <RightAside />
          </Sider>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </>
  )
}

export default Home
