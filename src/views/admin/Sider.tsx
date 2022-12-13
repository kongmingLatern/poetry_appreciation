import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Menu, Space } from 'antd'
import { Link } from 'react-router-dom'

export default function Sider() {
  return (
    <Menu
      className="h-100"
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key={'1'}>
        <Space>
          <UserOutlined />
          <Link to={'/admin/user'}>用户管理</Link>
        </Space>
      </Menu.Item>
      <Menu.Item key={'2'}>
        <Space>
          <UploadOutlined />
          <Link to={'/admin/poem'}>诗词管理</Link>
        </Space>
      </Menu.Item>
      <Menu.Item key={'3'}>
        <Space>
          <VideoCameraOutlined />
          <Link to={'/admin/comment'}>评论管理</Link>
        </Space>
      </Menu.Item>
    </Menu>
  )
}
