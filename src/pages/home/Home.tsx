import Headers from '@/components/Headers'
import { FunctionComponent } from 'react'
import { Layout } from 'antd'
import Contents from '@/components/Contents'

const { Header, Footer, Content } = Layout

interface HomeIndexProps {}

const Home: FunctionComponent<HomeIndexProps> = () => {
  return (
    <>
      <Layout>
        <Header>
          <Headers />
        </Header>
        <Layout>
          <Content>
            <Contents />
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </>
  )
}

export default Home
